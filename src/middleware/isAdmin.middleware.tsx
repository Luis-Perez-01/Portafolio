import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function IsAdmin({ children }: any) {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);

  if (userInfo !== null) {
    if (userInfo.id === "64f7f14111e13ad18a78c3a3") {
      return <>{children}</>;
    }
  } else {
    return (
      <>
        <div className="max-w-screen-lg w-full my-10 mx-auto animate-fade-down">
          <div className="max-w-screen-lg flex justify-between items-center mx-10 mb-10">
            <h1 className="font-semibold text-2xl">Últimos artículos</h1>
          </div>
        </div>
      </>
    );
  }
}
