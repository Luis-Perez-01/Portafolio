import Studies from "../components/Studies";
import Technologies from "../components/Technologies";

export default function AboutMe() {
  return (
    <div
      className="max-w-screen-lg space-y-10 w-full mx-auto p-6 pt-20 mb-10"
      id="aboutMe"
    >
      <section className="flex flex-col md:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900/20 rounded-lg animate-fade-up">
        <article className="leading-8 p-6">
          <h2 className="text-2xl font-bold pb-3">Sobre mí</h2>
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
      <section className="flex flex-col justify-center bg-gray-100 dark:bg-gray-900/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold pb-3">Mis estudios</h2>
        <Studies />
      </section>

      <Technologies />
    </div>
  );
}
