import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/navigation";
import { useEffect, useState } from "react";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  const darkTheme = theme === true ? "dark" : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <html className={darkTheme}>
      <body className="bg-white dark:bg-gray-950 dark:text-white font-hind pb-72">
        <BrowserRouter>
          <Navigation theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <footer className="absolute bottom-0 w-full text-center mx-auto py-8 border-t border-gray-100 dark:bg-gray-900 dark:border-t dark:border-gray-800">
            <p>&lt;Luis Dev/&gt;</p>
            <p>
              Contáctame en{" "}
              <a
                className="text-blue-700 hover:underline"
                href="mailto:LuisM1P3@hotmail.com"
              >
                LuisM1P3@hotmail.com
              </a>
            </p>
          </footer>
        </BrowserRouter>
      </body>
    </html>
  );
}

export default App;
