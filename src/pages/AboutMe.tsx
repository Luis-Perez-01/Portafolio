import Studies from "../components/Studies";

export default function AboutMe() {
  return (
    <div
      className="max-w-screen-lg space-y-10 w-full mx-auto p-6 pt-20"
      id="about"
    >
      <section className="grid grid-cols-1 md:grid-cols-6 place-content-center items-center bg-gray-100 dark:bg-gray-900/20 rounded-lg animate-fade-up gap-4 p-6">
        <article className="md:col-span-4 leading-6">
          <h2 className="text-2xl font-bold pb-3">Sobre mí</h2>
          <p className="[text-wrap:balance]">
            Egresado en Ingeniería de Desarrollo y Gestión de Software, enfocado
            en desarrollo web aunque también con experiencia en redes y soporte.
          </p>
          <p className="[text-wrap:balance]">
            Apasionado por <span className="text-blue-500">aprender</span> y
            comprometido con <span className="text-blue-500">crecer</span>{" "}
            profesionalmente en proyectos digitales.
          </p>
        </article>
        <figure className="md:col-span-2">
          <img className="h-28 mx-auto" src="/assets/Logo.png" alt="Logo" />
        </figure>
      </section>
      <section className="grid relative place-content-center bg-gray-100 dark:bg-gray-900/20 rounded-lg p-6">
        <h2 className="absolute px-6 pt-6 text-2xl font-bold pb-3">
          Mis estudios
        </h2>
        <div className="pt-12">
          <Studies />
        </div>
      </section>
    </div>
  );
}
