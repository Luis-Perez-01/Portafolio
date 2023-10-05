import { BadgeCheck, Menu, Moon, Sun } from "lucide-react";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import useMenu from "../hooks/ToggleMenuHook";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import jwt from "jwt-decode";

export default function Navigation() {
  const { theme, toggleTheme } = useContext<any>(ThemeContext);

  const { handleModalLogin } = useContext<any>(ModalContext);

  const { userInfo, setUserInfo } = useContext(UserContext);

  const { toogleMenu, handleClick } = useMenu();

  const navigate = useNavigate();

  useEffect(() => {
    validateSession();
  }, []);

  function validateSession() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwt(token);
      const { exp } = decoded;
      if (Date.now() >= exp * 1000) {
        destroySession();
      } else {
        setUserInfo({
          id: decoded.id,
          name: decoded.name,
          email: decoded.email,
        });
      }
    }
  }

  function destroySession() {
    localStorage.removeItem("token");
    setUserInfo(null);
  }

  return (
    <header className="dark:border-b dark:border-gray-800 drop-shadow-sm dark:text-white sticky bg-white/70 dark:bg-gray-900/90 backdrop-blur-md top-0 z-10">
      <nav className="flex flex-wrap justify-between items-center max-w-screen-lg mx-auto p-4">
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="flex items-center "
          to="/"
        >
          <img src="/assets/me.jpg" className="w-10 h-10 rounded-full mr-2" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700 dark:hover:text-blue-700">
            Luis Pérez
          </span>
          <BadgeCheck className="text-blue-700 ml-1" />
        </NavLink>

        <button
          onClick={handleClick}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <Menu />
        </button>
        <div
          className={`w-full border border-gray-100 rounded-lg md:mt-0 md:border-0 dark:border-gray-700 my-4 md:my-0 md:block md:w-auto ${
            toogleMenu === false ? "hidden" : ""
          }`}
        >
          <ul className="w-fit m-auto font-medium items-center flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <li>
              <a
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                href="#projects"
                onClick={() => {
                  handleClick();
                  navigate("/");
                }}
              >
                Proyectos
              </a>
            </li>

            <a
              className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
              href="#aboutMe"
              onClick={() => {
                handleClick();
                navigate("/");
              }}
            >
              Acerca de mí
            </a>

            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : isActive
                    ? "border-b-2 border-blue-700"
                    : ""
                }
                onClick={() => {
                  window.scrollTo(0, 0);
                  handleClick();
                }}
                to="blog"
              >
                Blog
              </NavLink>
            </li>

            {userInfo ? (
              <li>
                <button
                  onClick={destroySession}
                  className="rounded-lg text-white text-sm font-semibold bg-gray-700 hover:bg-gray-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
                >
                  Cerrar
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleModalLogin}
                  className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 tranform ease-in-out duration-75 px-3 py-2 drop-shadow"
                >
                  Iniciar
                </button>
              </li>
            )}

            <li>
              <label className="relative inline-flex float-right items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  className="sr-only peer"
                  checked={theme}
                />
                <div className="place-items-center w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                  {theme ? (
                    <Moon
                      size={16}
                      className="h-full mx-1 animate-rotate-y animate-once animate-duration-300"
                    />
                  ) : (
                    <Sun
                      size={16}
                      className="h-full mx-1 float-right animate-rotate-y animate-once animate-duration-300"
                    />
                  )}
                </div>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
