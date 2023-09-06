import { X } from "lucide-react";
import RegisterForm from "../../components/RegisterForm";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

export default function Register() {
  const { isRegisterOpen, handleModalRegister } = useContext(ModalContext);

  const handleRegisterOverlay = (e: any) => {
    if (e.target.classList.contains("visible")) {
      e.target.classList.remove("visible");
      handleModalRegister();
    }
  };

  return (
    <div
      onClick={handleRegisterOverlay}
      className={`absolute min-w-full min-h-[100vh] backdrop-blur-md z-10 ${
        isRegisterOpen ? "visible" : "invisible"
      }`}
    >
      <div className="absolute left-0 right-0 top-5 h-fit bg-white dark:bg-gray-900 md:w-1/3 mx-auto rounded-lg drop-shadow-lg p-6 z-20">
        <header className="flex justify-between">
          <h1 className="text-2xl font-semibold text-center">
            Crear una cuenta
          </h1>
          <button
            onClick={handleModalRegister}
            className="flex justify-center items-center w-6 h-6 border rounded-lg"
          >
            <X size={20} className="hover:text-red-500" />
          </button>
        </header>
        <RegisterForm />
      </div>
    </div>
  );
}
