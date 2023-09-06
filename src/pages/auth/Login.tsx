import { X } from "lucide-react";
import LoginForm from "../../components/LoginForm";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function Login() {
  const { isLoginOpen, handleModalLogin } = useContext(ModalContext);

  const handleLoginOverlay = (e: any) => {
    if (e.target.classList.contains("visible")) {
      e.target.classList.remove("visible");
      handleModalLogin();
    }
  };

  return (
    <div
      onClick={handleLoginOverlay}
      className={`absolute min-w-full min-h-[100vh] backdrop-blur-md z-10 ${
        isLoginOpen ? "visible" : "invisible"
      }`}
    >
      <div className="absolute left-0 right-0 top-5 h-fit bg-white dark:bg-gray-900 md:w-1/3 mx-auto rounded-lg drop-shadow-lg p-6 z-20">
        <header className="flex justify-between">
          <h1 className="text-2xl font-semibold text-center">Iniciar sesión</h1>
          <button
            onClick={handleModalLogin}
            className="flex justify-center items-center w-6 h-6 border rounded-lg"
          >
            <X size={20} className="hover:text-red-500" />
          </button>
        </header>
        <LoginForm />
      </div>
    </div>
  );
}
