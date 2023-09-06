import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserContextProvider = ({ children }: { children: any }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
