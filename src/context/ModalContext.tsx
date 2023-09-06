import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext({
  isLoginOpen: false,
  isRegisterOpen: false,
  handleModalLogin: () => {},
  handleModalRegister: () => {},
  handleRedirectLogin: () => {},
  handleRedirectRegister: () => {},
});

export const ModalContextProvider = ({ children }: { children: any }) => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isLoginOpen || isRegisterOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoginOpen, isRegisterOpen]);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        isRegisterOpen,
        handleModalLogin: () => setIsLoginOpen(!isLoginOpen),
        handleModalRegister: () => setIsRegisterOpen(!isRegisterOpen),
        handleRedirectLogin: () => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        },
        handleRedirectRegister: () => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
