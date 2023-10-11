import { Timeline } from "@mantine/core";

export default function Studies() {
  return (
    <Timeline active={2} bulletSize={18} lineWidth={6}>
      <Timeline.Item
        title="Bachillerato Cetis No. 62"
        className="dark:text-white"
      >
        <p className="text-gray-500 dark:text-gray-400">
          2016 - 2019 | Técnico en Programación
        </p>
      </Timeline.Item>
      <Timeline.Item
        title="Universidad Tecnológica de Salamanca"
        className="dark:text-white"
      >
        <p className="text-gray-500 dark:text-gray-400">
          2019 - 2021 | Técnico Superior Universitario en Tecnologías de la
          información
        </p>
      </Timeline.Item>
      <Timeline.Item
        title="Universidad Tecnológica de Salamanca"
        className="dark:text-white"
      >
        <p className="text-gray-500 dark:text-gray-400">
          2021 - 2023 | Ingeniería en Desarrollo y Gestión de Software
        </p>
      </Timeline.Item>
    </Timeline>
  );
}
