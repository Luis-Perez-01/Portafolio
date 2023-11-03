import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export default function IsAdmin() {
  const { userInfo } = useContext(UserContext);

  return userInfo ? <Outlet /> : <Navigate replace to={"/"} />;
}
