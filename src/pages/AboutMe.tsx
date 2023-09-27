import { useEffect, useState } from "react";
import api from "../api";

interface Tecnology {
  _id: number;
  name: string;
  image: string;
}

export default function AboutMe() {
  const [tecnologies, setTecnologies] = useState<Tecnology[]>([]);

  useEffect(() => {
    api.tecnologies.getAll.fetch().then((data) => setTecnologies(data));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="max-w-screen-lg space-y-10 w-full mx-auto p-6 pt-20 mb-10"
      id="aboutMe"
    >
      <section className="flex flex-col md:flex-row justify-center items-center bg-gray-100 dark:bg-gray-900/20 rounded-lg animate-fade-up">
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

      <section className="grid grid-cols-2 md:grid-cols-4 p-6 w-full bg-gray-100 dark:bg-gray-900/20 rounded-lg animate-fade-down gap-6">
        {tecnologies.map((item) => (
          <figure key={item._id} className="flex flex-col w-full">
            <img
              className="w-12 h-12 drop-shadow-2xl mx-auto"
              src={item.image}
              alt={item.name}
            />
            <p className="text-center text-sm font-semibold">{item.name}</p>
          </figure>
        ))}
      </section>
    </div>
  );
}
