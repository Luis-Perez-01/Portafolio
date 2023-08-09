import { Github, Linkedin } from "lucide-react";
import Lottie from "lottie-react";
import dataLottie from "../../public/assets/bg-lottie.json";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function HomePage() {
  return (
    <>
      <section className="w-full flex flex-col justify-center gap-8 bg-gray-100 dark:bg-gray-950 md:flex-row items-center md:mx-auto py-24 animate-fade-up">
        <Lottie
          className="absolute max-w-[25rem] md:left-[34%] -z-10"
          animationData={dataLottie}
          loop
          autoPlay
        />
        <div className="text-center leading-10 mx-10 md:mx-0 md:mr-10">
          <p className="text-sm drop-shadow">Desarrollador web</p>
          <p className="text-4xl font-semibold drop-shadow">
            Hola, mi nombre es <span className="text-blue-600">Luis</span> 👋
          </p>
          <p className="inline bg-gray-200/60 dark:bg-gray-800 p-0.5 drop-shadow">
            Pasión por aprender y motivación para crecer.
          </p>

          <div className="flex justify-center my-2 gap-2">
            <a
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 hover:ring-2 hover:scale-105 px-3 py-2 drop-shadow"
              href="https://www.linkedin.com/in/luis-miguel-p%C3%A9rez-padr%C3%B3n-05a395177/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 px-3 py-2 drop-shadow"
              href="assets/C.V. Luis Miguel Pérez Padrón.pdf"
              download={"C.V. Luis Miguel Pérez Padrón.pdf"}
            >
              Descargar CV
            </a>
            <a
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 hover:ring-2 hover:scale-105 px-3 py-2 drop-shadow"
              href="https://github.com/Luis-Perez-01"
              target="_blank"
            >
              <Github />
            </a>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-lg">
            <img
              className="max-w-[8rem] lg:max-w-[15rem] shadow transform hover:scale-105 duration-300"
              src="assets/me.jpg"
            />
          </div>
        </div>
      </section>
      <Projects />
      <AboutMe />
    </>
  );
}
