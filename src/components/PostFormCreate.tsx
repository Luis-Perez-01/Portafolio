import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSchema } from "../schemas/post.schema";
import { useEffect, useState } from "react";
import api from "../api";
import { toast } from "sonner";
import slug from "slug";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Image from "@tiptap/extension-image";
import { Button, Input } from "@nextui-org/react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PostFormCreate({ postData }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
  });

  useEffect(() => {
    if (postData) {
      const { title, description, file, content } = postData;
      setValue("title", title);
      setValue("description", description);
      setValue("file", file);
      setCurrentImage(postData.file);
      setValue("content", content);

      editor?.chain().setContent(content).focus().run();
    }
  }, [postData, setValue, setCurrentImage, editor]);

  const handleChange = () => {
    const content = editor?.getHTML();
    setValue("content", content);
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { title, description, file, content } = data;

      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug(title));
      formData.append("description", description);

      if (file) {
        formData.append("file", file);
      } else {
        formData.append("file", currentImage || "");
      }

      formData.append("content", content);

      const response = postData
        ? await api.posts.update.fetch(formData, postData._id)
        : await api.posts.create.fetch(formData);

      if (response.message) {
        toast.error(response.message);
      } else {
        toast.success(
          postData
            ? "Post actualizado correctamente"
            : "Post creado correctamente"
        );
        navigate(`/blog/${response.slug}`);
      }
    } catch (error: any) {
      toast.error(
        `Error al ${postData ? "actualizar" : "crear"} el post: ${
          error.message
        }`
      );
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="grid max-w-screen-lg space-y-2 mx-auto p-6"
    >
      <label htmlFor="title">Título</label>
      <Input
        type="text"
        id="title"
        variant="bordered"
        {...register("title")}
        errorMessage={errors.title?.message?.toString()}
        isRequired
      />
      <label htmlFor="description">Descripción</label>
      <Input
        type="text"
        id="description"
        variant="bordered"
        {...register("description")}
        errorMessage={errors.description?.message?.toString()}
        isRequired
      />
      <label
        htmlFor="file"
        className="border-2 border-dashed dark:border-neutral-600 rounded-lg flex flex-col justify-center items-center min-h-unit-24 drop-shadow-md hover:border-neutral-400 dark:hover:border-neutral-500 transition-opacity ease-in-out duration-75 cursor-pointer"
      >
        <Upload />
        Subir imagen de portada
        <input
          type="file"
          id="file"
          {...register("file")}
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setCurrentImage(URL.createObjectURL(e.target.files[0]));
              setValue("file", e.target.files[0]);
            }
          }}
        />
      </label>

      {currentImage && (
        <div className="mb-4">
          <label>Imagen actual:</label>
          <img src={currentImage} alt="Imagen actual" className="max-w-md" />
        </div>
      )}

      <label htmlFor="content">Contenido</label>

      <RichTextEditor editor={editor} onKeyUp={handleChange}>
        <RichTextEditor.Toolbar sticky className="py-4" stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <Button
        type="submit"
        className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-[1.01] tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
        isLoading={isLoading}
      >
        {isLoading ? "Cargando..." : postData ? "Editar" : "Crear"}
      </Button>
    </form>
  );
}
