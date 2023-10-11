import LoginForm from "../../components/LoginForm";
import { useModal } from "../../context/ModalContext";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

export default function Login() {
  const { isOpen, onOpenChange } = useModal();

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="lg"
      classNames={{
        base: "dark:bg-gray-900",
        backdrop: "backdrop-blur-md backdrop-opacity-100",
      }}
    >
      <ModalContent>
        <ModalHeader>Iniciar sesión</ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
