import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function VerifyAdmin({ children }: { children: any }) {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  if (userInfo === null) {
    navigate("/");
  } else {
    if (userInfo.id === "64f7f14111e13ad18a78c3a3") {
      return <>{children}</>;
    }
  }
}
