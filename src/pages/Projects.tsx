import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      className="max-w-screen-lg w-full animate-fade-down p-6 pt-10 mt-10 mx-auto"
      id="projects"
    >
      <h1 className="text-2xl font-bold pb-4">Mis proyectos</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center bg-gray-100 dark:bg-gray-900/20 rounded-lg p-6 gap-10">
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden rounded-t-lg">
            <a href="https://ecommerce-a16.vercel.app/" target="_blank">
              <img
                className="w-full max-h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/Ecommerce.png"
                alt="Ecommerce"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Ecommerce
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden rounded-t-lg">
            <a href="">
              <img
                className="w-full max-h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/AppMovie.png"
                alt="App movies"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Movie App
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden  rounded-t-lg">
            <a href="https://frugo.com.mx/es/" target="_blank">
              <img
                className="w-full max-h-[38.5rem] object-cover scale-105 hover:scale-110 duration-300"
                src="/assets/Frugo.png"
                alt="Productos Frugo página web"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Productos Frugo
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden  rounded-t-lg">
            <a href="https://prosesacomercializadora.com.mx/" target="_blank">
              <img
                className="w-full max-h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/Prosesa.png"
                alt="Ecommerce"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Prosesa Comercializadora
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden  rounded-t-lg">
            <a
              href="https://tic-tac-toe-kappa-coral.vercel.app"
              target="_blank"
            >
              <img
                className="w-full max-h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/tic-tac-toe.png"
                alt="Newsletter"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Tic tac toe
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden  rounded-t-lg">
            <a href="https://newsletter-three-neon.vercel.app" target="_blank">
              <img
                className="w-full max-h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/Newsletter.png"
                alt="Newsletter"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Newsletter
          </div>
        </div>
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden  rounded-t-lg">
            <a href="https://to-do-ecru-seven.vercel.app/" target="_blank">
              <img
                className="w-full h-[38.5rem] object-cover hover:scale-105 duration-300"
                src="/assets/ToDo.png"
                alt="To Do App"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            To Do App
          </div>
        </div>
      </section>
    </article>
  );
}
