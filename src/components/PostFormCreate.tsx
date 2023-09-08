import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { postSchema } from "../schemas/post.schema";
import { useState } from "react";
import api from "../api";
import { toast } from "sonner";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] },
      { color: [] },
      { background: [] },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

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

  const handleChange = (value: any) => {
    setValue("content", value);
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { title, description, file, content } = data;

      const formData = new FormData();
      formData.append("title", title);
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
      <div>
        <ReactQuill
          modules={modules}
          formats={formats}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-[1.01] tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
      >
        {isLoading ? "Cargando..." : "Crear"}
      </button>
    </form>
  );
}
