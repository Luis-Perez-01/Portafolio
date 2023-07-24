export default function Projects() {
  return (
    <>
      <h1 className="text-2xl font-bold mx-24 my-10">Mis proyectos</h1>
      <section className="grid grid-cols-1 md:grid-cols-4 items-center dark:bg-slate-900/50 rounded-lg p-6 m-10 gap-2 animate-fade-down">
        <div className="max-w-[19.13rem] mx-auto">
          <div className="overflow-hidden rounded-t-lg">
            <a href="https://ecommerce-a16.vercel.app/" target="_blank">
              <img
                className="w-[19.13rem] h-full object-cover hover:scale-105 duration-300"
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
                className="w-[19.13rem] h-full object-cover hover:scale-105 duration-300"
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
                className="w-[19.13rem] h-full object-cover scale-105 hover:scale-110 duration-300"
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
                className="w-[19.13rem] h-full object-cover hover:scale-105 duration-300"
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
            <a href="https://tic-tac-toe-kappa-coral.vercel.app" target="_blank">
              <img
                className="w-[19.13rem] h-full object-cover hover:scale-105 duration-300"
                src="/assets/Newsletter.png"
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
                className="w-[19.13rem] h-full object-cover hover:scale-105 duration-300"
                src="/assets/Newsletter.png"
                alt="Newsletter"
              />
            </a>
          </div>
          <div className="text-center font-semibold bg-gray-200 dark:bg-gray-800 rounded-b-lg px-3 py-2">
            Newsletter
          </div>
        </div>
      </section>
    </>
  );
}
