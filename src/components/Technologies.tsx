import { useEffect, useState } from "react";
import api from "../api";

interface Tecnology {
  _id: number;
  name: string;
  image: string;
}

export default function Technologies() {
  const [tecnologies, setTecnologies] = useState<Tecnology[]>([]);

  useEffect(() => {
    api.tecnologies.getAll.fetch().then((data) => setTecnologies(data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 p-6 w-full bg-gray-100 dark:bg-gray-900/20 rounded-lg animate-fade-down gap-6">
      {tecnologies.map((item) => (
        <figure key={item._id} className="flex flex-col w-full">
          <img
            className="w-12 h-12 drop-shadow-2xl mx-auto"
            src={item.image}
            alt={item.name}
            loading="lazy"
          />
          <p className="text-center text-sm font-semibold">{item.name}</p>
        </figure>
      ))}
    </section>
  );
}
