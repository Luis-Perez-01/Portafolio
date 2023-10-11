import { BadgeCheck, Moon, Sun } from "lucide-react";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import useMenu from "../hooks/ToggleMenuHook";
import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";
import jwt from "jwt-decode";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function Navigation() {
  const { handleModalLogin } = useContext<any>(ModalContext);

  const { userInfo, setUserInfo } = useContext(UserContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const { handleClick } = useMenu();

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
    <Navbar className="dark:bg-gray-900/90" onMenuOpenChange={handleClick}>
      <NavbarContent>
        <NavbarBrand>
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
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="#projects"
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Acerca de mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="blog"
            className={"hover:opacity-70 transform ease-in-out duration-300"}
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Blog
          </NavLink>
        </NavbarItem>
        {userInfo ? (
          <Button onClick={destroySession}>Cerrar</Button>
        ) : (
          <Button
            className="hover:scale-[1.01] tranform ease-in-out duration-75 drop-shadow"
            color="primary"
            onClick={handleModalLogin}
          >
            Iniciar
          </Button>
        )}
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
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        {userInfo ? (
          <Button onClick={destroySession}>Cerrar</Button>
        ) : (
          <Button color="primary" onClick={handleModalLogin}>
            Iniciar
          </Button>
        )}
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <Link
            color="foreground"
            href="#projects"
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Acerca de mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="blog"
            className={"hover:opacity-70 transform ease-in-out duration-300"}
            onClick={() => {
              handleClick();
              navigate("/");
            }}
          >
            Blog
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <label className="relative float-right items-center cursor-pointer">
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
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
