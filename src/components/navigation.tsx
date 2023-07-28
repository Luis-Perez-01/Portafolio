import { BadgeCheck, Menu, Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
}) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function handleClick() {
    setIsNavExpanded(!isNavExpanded);
  }
  const toogleMenu = isNavExpanded ? "" : "hidden";

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <nav className="bg-white/70 dark:border-b dark:border-gray-800 drop-shadow-sm dark:text-white dark:bg-gray-900/90 sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink className="flex items-center " to="/">
          <img src="/assets/me.jpg" className="w-10 h-10 rounded-full mr-2" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700 dark:hover:text-blue-700">
            Luis Pérez
          </span>
          <BadgeCheck className="text-blue-700 ml-1"/>
        </NavLink>

        <button
          onClick={handleClick}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <Menu />
        </button>
        <div className={`w-full md:block md:w-auto ${toogleMenu}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-8 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : isActive
                    ? "border-b-2 border-blue-700"
                    : ""
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : isActive
                    ? "border-b-2 border-blue-700"
                    : ""
                }
                to="/projects"
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : isActive
                    ? "border-b-2 border-blue-700"
                    : ""
                }
                to="about"
              >
                Acerca de mí
              </NavLink>
            </li>
           
            <li>
              <label className="relative inline-flex float-right items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {theme ? (
                    <Sun className="animate-rotate-y animate-once animate-duration-300" />
                  ) : (
                    <Moon className="animate-rotate-y animate-once animate-duration-300" />
                  )}
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
