import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="max-w-screen-xl flex flex-col md:flex-row justify-center items-center my-16 mx-10 lg:mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg animate-fade-up">
        <article className="leading-8 md:max-w-[30vw] p-6">
          <h1 className="text-2xl font-bold">Sobre mí</h1>
          <p>
            Egresado en Ingeniería de Desarrollo y Gestión de Software,
            enfocado en desarrollo web aunque también con experiencia en redes y soporte.
            Apasionado por aprender y comprometido con crecer profesionalmente
            en proyectos digitales.
          </p>
        </article>
        <figure className="w-full">
          <img
            className="h-32 mx-auto"
            src="/assets/Logo.png"
            alt="Logo"
          />
        </figure>
      </section>

      <section className="max-w-screen-xl grid grid-cols-2 md:grid-cols-4 relative justify-center p-6 my-16 mx-10 lg:mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg animate-fade-down">
        <h1 className="absolute top-5 left-5 text-2xl font-bold">
          Habilidades
        </h1>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img
              className="w-20 h-20 mx-auto"
              src="/assets/html-5.png"
              alt=""
            />
          </figure>
          <p className="text-center text-sm font-semibold">HTML</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img className="w-20 h-20 mx-auto" src="/assets/css-3.png" alt="" />
          </figure>
          <p className="text-center text-sm font-semibold">CSS</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img className="w-18 h-20 mx-auto" src="/assets/js.png" alt="" />
          </figure>
          <p className="text-center text-sm font-semibold">Javascript</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img className="w-20 h-20 mx-auto" src="/assets/Git.png" alt="" />
          </figure>
          <p className="text-center text-sm font-semibold">Git</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img className="w-20 h-20 mx-auto" src="/assets/php.png" alt="" />
          </figure>
          <p className="text-center text-sm font-semibold">PHP</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img className="w-20 h-20 mx-auto" src="/assets/mysql.png" alt="" />
          </figure>
          <p className="text-center text-sm font-semibold">MySQL</p>
        </div>
        <div className="flex flex-col mt-12">
          <figure className="w-full">
            <img
              className="w-28 h-20 mx-auto"
              src="/assets/node js.png"
              alt=""
            />
          </figure>
          <p className="text-center text-sm font-semibold">Node JS</p>
        </div>
        <div className="flex flex-col items-center mt-12">
          <figure className="w-full">
            <img
              className="w-20 h-20 mx-auto"
              src="/assets/mongodb.png"
              alt=""
            />
          </figure>
          <p className="text-center text-sm font-semibold">Mongo DB</p>
        </div>
      </section>
    </>
  );
}
