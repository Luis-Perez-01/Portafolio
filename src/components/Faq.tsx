export default function Faq() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900/20 rounded-lg p-6 space-y-2">
      <h2 className="text-2xl font-bold pb-3">Preguntas frecuentes</h2>
      <details open>
        <summary className="rounded-lg border dark:border-gray-700 cursor-pointer px-3 py-2">
          ¿Quién eres y cuál es tu experiencia?
        </summary>
        <p className="px-3 py-2">
          Me llamo Luis Miguel Pérez Padrón, tengo 22 años soy de México, mi
          experiencia es de 2 años en desarrollo web, 1 año en soporte técnico y
          1 año en redes.
        </p>
      </details>
      <details>
        <summary className="rounded-lg border dark:border-gray-700 cursor-pointer px-3 py-2">
          ¿Cuál es tu enfoque o especialización?
        </summary>
        <p className="px-3 py-2">
          Mi enfoque principal es el desarrollo web, aunque también tengo
          experiencia en redes y soporte técnico. Estudie en la Universidad
          Tecnológica de Salamanca durante 4 años la carrera de Ingeniería en
          Desarrollo y Gestión de Software.
        </p>
      </details>
      <details>
        <summary className="rounded-lg border dark:border-gray-700 cursor-pointer px-3 py-2">
          ¿Qué nivel de inglés tienes?
        </summary>
        <p className="px-3 py-2">
          Mi nivel de inglés es intermedio, puedo leer y escribir en inglés
          aunque no soy muy bueno hablando. Actualmente estoy estudiando para
          mejorar mi nivel de inglés y obtener una certificación.
        </p>
      </details>
    </section>
  );
}
