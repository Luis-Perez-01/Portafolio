import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSchema } from "../schemas/post.schema";
import { useState } from "react";
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

export default function PostFormCreate() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      formData.append("file", file[0]);
      formData.append("content", content);

      const response = await api.posts.create.fetch(formData);
      if (response.message) {
        toast.error(response.message);
      } else {
        toast.success("Post creado correctamente");
      }
    } catch (error: any) {
      toast.error(`Error al crear el post: ${error.message}`);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-screen-lg space-y-2 mx-auto p-6"
      encType="multipart/form-data"
    >
      <label htmlFor="title">Título</label>
      <input
        type="text"
        id="title"
        {...register("title")}
        className={`border border-gray-300 dark:text-black dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.title ? "border-red-500 dark:border-red-500 outline-none" : ""
        }`}
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message?.toString()}</span>
      )}
      <label htmlFor="description">Descripción</label>
      <input
        type="text"
        id="description"
        {...register("description")}
        className={`border border-gray-300 dark:text-black dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.description
            ? "border-red-500 dark:border-red-500 outline-none"
            : ""
        }`}
      />
      {errors.description && (
        <span className="text-red-500">
          {errors.description.message?.toString()}
        </span>
      )}
      <label htmlFor="file">Imagen</label>
      <input
        {...register("file")}
        type="file"
        id="file"
        className={`border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.file ? "border-red-500 dark:border-red-500 outline-none" : ""
        }`}
      />
      {errors.file && (
        <span className="text-red-500">{errors.file.message?.toString()}</span>
      )}
      <label htmlFor="content">Content</label>

      <RichTextEditor editor={editor} onKeyUp={handleChange}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
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
      <button
        type="submit"
        className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-[1.01] tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
      >
        {isLoading ? "Cargando..." : "Crear"}
      </button>
    </form>
  );
}
