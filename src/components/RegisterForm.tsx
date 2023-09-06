import { useContext, useState } from "react";
import { registerSchema } from "../schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import api from "../api";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleModalRegister, handleRedirectRegister } =
    useContext(ModalContext);

  const { setUserInfo } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { name, email, password } = data;
      const response = await api.auth.register.fetch(name, email, password);
      if (response.error) {
        toast.error("Error al crear el usuario");
      } else {
        localStorage.setItem("token", response.token);
        setUserInfo({
          id: response.id,
          name: response.name,
          email: response.email,
        });
        toast.success("Usuario creado correctamente");
        handleModalRegister();
      }
    } catch (error) {
      toast.error("Error al crear el usuario");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 mt-4"
    >
      <label htmlFor="name" className={errors.name ? "text-red-500" : ""}>
        Nombre
      </label>
      <input
        type="name"
        id="name"
        {...register("name")}
        className={`border border-gray-300 dark:text-black dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.name ? "border-red-500 dark:border-red-500 outline-none" : ""
        }`}
      />
      <label htmlFor="email" className={errors.email ? "text-red-500" : ""}>
        Email
      </label>
      <input
        type="email"
        id="email"
        {...register("email")}
        className={`border border-gray-300 dark:text-black dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.email ? "border-red-500 dark:border-red-500 outline-none" : ""
        }`}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message?.toString()}</span>
      )}
      <label
        htmlFor="password"
        className={errors.password ? "text-red-500" : ""}
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        autoComplete="on"
        {...register("password")}
        className={`border border-gray-300 dark:text-black dark:border-gray-700 rounded-lg px-2 py-1 ${
          errors.email ? "border-red-500 dark:border-red-500 outline-none" : ""
        }`}
      />
      {errors.password && (
        <span className="text-red-500">
          {errors.password.message?.toString()}
        </span>
      )}
      <p className="text-sm pb-8">
        Ya tienes una cuenta?
        <button
          type="button"
          onClick={handleRedirectRegister}
          className="text-blue-600 ml-1"
        >
          Accede aquí
        </button>
      </p>
      <button
        type="submit"
        className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-[1.01] tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
      >
        {isLoading ? "Cargando..." : "Registrarse"}
      </button>
    </form>
  );
}
