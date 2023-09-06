import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-screen-lg space-y-10 w-full mx-auto p-6 my-10">
      <section className="flex flex-col md:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900 rounded-lg animate-fade-up">
        <article className="leading-8 p-6">
          <h1 className="text-2xl font-bold pb-3">Sobre mí</h1>
          <p>
            Egresado en Ingeniería de Desarrollo y Gestión de Software, enfocado
            en desarrollo web aunque también con experiencia en redes y soporte.
          </p>
          <p>
            Apasionado por <span className="text-blue-700">aprender</span> y
            comprometido con <span className="text-blue-700">crecer</span>{" "}
            profesionalmente en proyectos digitales.
          </p>
        </article>
        <figure className="w-full">
          <img className="h-32 mx-auto" src="/assets/Logo.png" alt="Logo" />
        </figure>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 p-6 w-full bg-gray-100 dark:bg-gray-900 rounded-lg animate-fade-down">
        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/html-5.png" alt="" />
          <p className="text-center text-sm font-semibold">HTML</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/css-3.png" alt="" />
          <p className="text-center text-sm font-semibold">CSS</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-18 h-20 mx-auto" src="/assets/js.png" alt="" />
          <p className="text-center text-sm font-semibold">Javascript</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/Git.png" alt="" />
          <p className="text-center text-sm font-semibold">Git</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/php.png" alt="" />
          <p className="text-center text-sm font-semibold">PHP</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/mysql.png" alt="" />
          <p className="text-center text-sm font-semibold">MySQL</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-28 h-20 mx-auto" src="/assets/node js.png" alt="" />
          <p className="text-center text-sm font-semibold">Node JS</p>
        </figure>

        <figure className="flex flex-col w-full">
          <img className="w-20 h-20 mx-auto" src="/assets/mongodb.png" alt="" />
          <p className="text-center text-sm font-semibold">Mongo DB</p>
        </figure>
      </section>
    </div>
  );
}
