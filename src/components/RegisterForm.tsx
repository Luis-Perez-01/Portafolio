import { useContext, useState } from "react";
import { registerSchema } from "../schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import api from "../api";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import { Input, Button } from "@nextui-org/react";

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
      <Input
        type="name"
        id="name"
        label="Nombre"
        variant="bordered"
        {...register("name")}
        errorMessage={errors.name?.message?.toString()}
      />

      <Input
        type="email"
        id="email"
        label="Email"
        variant="bordered"
        {...register("email")}
        errorMessage={errors.email?.message?.toString()}
      />

      <Input
        type="password"
        id="password"
        label="Password"
        autoComplete="on"
        variant="bordered"
        {...register("password")}
        errorMessage={errors.password?.message?.toString()}
      />

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

      <Button
        type="submit"
        className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-[1.01] tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
        isLoading={isLoading}
      >
        {isLoading ? "Cargando..." : "Registrarse"}
      </Button>
    </form>
  );
}
