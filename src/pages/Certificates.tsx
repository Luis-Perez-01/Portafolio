export default function Certificates() {
  return (
    <section
      className="max-w-screen-lg space-y-10 w-full mx-auto p-6"
      id="certificates"
    >
      <article className="bg-gray-100 dark:bg-gray-900/20 rounded-lg p-6">
        <hgroup>
          <h2 className="text-2xl font-semibold pb-6">
            Mis títulos y certificados
          </h2>
        </hgroup>
        <div className="grid grid-cols-2 gap-6">
          <picture className="overflow-hidden rounded-lg">
            <img
              src="assets/20231101_150406.jpg"
              alt="Título de Ingeniería"
              className="aspect-auto"
            />
          </picture>
          <picture className="overflow-hidden rounded-lg">
            <img
              src="assets/Certificado GIT Mastermind.jpg"
              alt="Certificado en Git academia Mastermind"
              className="object-cover w-full h-full"
            />
          </picture>
        </div>
      </article>
    </section>
  );
}
