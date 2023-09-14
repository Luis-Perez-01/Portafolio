import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schemas/auth.schema";
import { useContext, useState } from "react";
import { toast } from "sonner";
import api from "../api";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleModalLogin, handleRedirectLogin } = useContext(ModalContext);

  const { setUserInfo } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const { email, password } = data;
      const response = await api.auth.login.fetch(email, password);
      if (response.message) {
        toast.error(response.message);
      } else {
        localStorage.setItem("token", response.token);
        setUserInfo({
          id: response.id,
          name: response.name,
          email: response.email,
        });
        toast.success("Sesión iniciada correctamente");
        reset();
        handleModalLogin();
      }
    } catch (error) {
      toast.error("Error al crear el usuario");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col relative space-y-2 mt-4"
    >
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
        autoComplete="on"
        label="Password"
        variant="bordered"
        {...register("password")}
        errorMessage={errors.password?.message?.toString()}
      />
      <p className="text-sm pb-8">
        Aún no te has registrado?
        <button
          type="button"
          onClick={handleRedirectLogin}
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
        {isLoading ? "Cargando..." : "Iniciar"}
      </Button>
    </form>
  );
}
