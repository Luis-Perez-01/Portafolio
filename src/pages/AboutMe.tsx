export default function AboutMe() {
  return (
    <section className="max-w-screen-xl flex flex-col md:flex-row justify-center my-16 mx-10 lg:mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg animate-fade-up">
      <article className="leading-8 text-justify md:max-w-[30vw] p-6">
        <h1 className="text-2xl font-bold">
            Sobre mí
        </h1>
        <p>
          Actualmente soy recién egresado en Ingeniería de Desarrollo y Gestión
          de Software, enfocándome principalmente en el desarrollo web. Además,
          cuento con experiencia en el área de redes y soporte, lo que ha
          enriquecido mis habilidades en diferentes aspectos de la informática.
          Siempre me ha gustado investigar por mi cuenta y aprender sobre estos
          temas. Me considero una persona con mucha facilidad para aprender y
          responsable en mi trabajo. Estoy motivado para seguir creciendo
          profesionalmente y colaborar con otros en proyectos y desafíos del
          mundo digital.
        </p>
      </article>
      <figure className="w-full">
        <img className="mx-auto hover:animate-jump" src="/assets/Logo.png" alt="" />
      </figure>
    </section>
  );
}
