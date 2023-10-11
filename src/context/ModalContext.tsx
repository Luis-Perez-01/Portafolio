import { useDisclosure } from "@nextui-org/react";
import { createContext, useContext } from "react";

export const ModalContext = createContext({} as any);

export function useModal() {
  return useContext(ModalContext);
}

export const ModalContextProvider = ({ children }: { children: any }) => {
  const modal = useDisclosure();

  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
};
