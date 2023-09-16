import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function IsAdmin({ children }: any) {
  const { userInfo } = useContext(UserContext);

  if (userInfo !== null) {
    if (userInfo.id === "64f7f14111e13ad18a78c3a3") {
      return <>{children}</>;
    } else {
      return <></>;
    }
  }
}
