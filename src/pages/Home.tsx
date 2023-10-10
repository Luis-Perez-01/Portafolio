import { Github, Linkedin } from "lucide-react";
import Lottie from "lottie-react";
import dataLottie from "../assets/bg-lottie.json";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { Button } from "@nextui-org/react";

export default function HomePage() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900/20 animate-fade-up w-full md:mx-auto gap-8 py-24">
        <div className="relative text-center leading-10 mx-10 md:mx-0 md:mr-10">
          <Lottie
            className="absolute left-0 right-0 -top-10 w-[60%] mx-auto -z-10"
            animationData={dataLottie}
            loop
            autoPlay
          />
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
              href="https://www.linkedin.com/in/luis-miguel-pérez-padrón-016aa3288"
              target="_blank"
            >
              <Linkedin />
            </a>
            <Button
              className="rounded-lg text-white text-sm font-semibold bg-blue-700 hover:bg-blue-600 hover:scale-105 px-3 py-2 drop-shadow"
              as={"a"}
              href="assets/C.V. Luis Miguel Pérez Padrón.pdf"
              download={"C.V. Luis Miguel Pérez Padrón.pdf"}
            >
              Descargar CV
            </Button>
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
