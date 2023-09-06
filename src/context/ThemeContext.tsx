import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: false, toggleTheme: () => {} });

const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === "dark") {
      return true;
    }
    if (localStorage.getItem("theme") === "light") {
      return false;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (theme === true) {
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: () => setTheme(!theme) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
