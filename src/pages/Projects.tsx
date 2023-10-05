import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import api from "../api";
import LoadingProjects from "../components/LoadingProjects";

interface Project {
  _id: number;
  name: string;
  summary: string;
  description: string;
  url: string;
  technologies: [
    {
      _id: number;
      name: string;
      image: string;
    }
  ];
  desktopImage: string;
  mobileImage: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    api.projects.getAll
      .fetch()
      .then((data) => setProjects(data))
      .finally(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      className="max-w-screen-lg w-full animate-fade-down p-6 pt-10 mt-10 mx-auto"
      id="projects"
    >
      <h1 className="text-2xl font-bold pb-6">Mis proyectos</h1>
      {isLoading ? (
        <LoadingProjects />
      ) : (
        <section className="grid lg:grid-cols-2 gap-6">
          {projects
            .slice()
            .reverse()
            .map(
              ({
                _id,
                name,
                summary,
                description,
                url,
                technologies,
                desktopImage,
                mobileImage,
              }) => (
                <div key={_id} className="relative rounded-lg overflow-hidden">
                  <a href={url} className="group" target="_blank">
                    <figure>
                      <img
                        className="aspect-video object-cover group-hover:scale-105 duration-300"
                        src={desktopImage}
                        alt={name}
                        loading="lazy"
                      />
                    </figure>
                    <figure className="hidden lg:flex absolute top-0 bottom-0 my-auto left-5 rounded-md border-2 border-transparent group-hover:border-2 group-hover:border-white dark:group-hover:border-[#1D273D] group-hover:drop-shadow-md overflow-hidden w-[18%] h-fit z-10">
                      <img
                        className="aspect-[9/20] object-cover"
                        src={mobileImage}
                        alt={name}
                      />
                    </figure>
                    <IconExternalLink className="absolute top-5 right-5 group-hover:scale-125 duration-100 text-white" />
                  </a>
                  <div className="min-w-full h-[60%] hover:bg-gray-100/60 bg-gray-100 dark:bg-[#1D273D] hover:dark:bg-[#1D273D]/60 hover:backdrop-blur-lg lg:absolute lg:top-[78%] lg:hover:top-[40%] pl-2 lg:pl-[26%] transform duration-200 py-2 pr-2">
                    <hgroup className="flex flex-col">
                      <h2 className="col-span-1 text-xl font-semibold">
                        {name}
                      </h2>
                      <p className="text-sm line-clamp-2">{summary}</p>
                      <p className="line-clamp-2 text-xs mt-2">{description}</p>
                      <div className="flex ml-auto lg:my-2 mr-2 -space-x-4">
                        {technologies.map(({ _id, name, image }) => (
                          <img
                            key={_id}
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-[#304165]"
                            src={image}
                            alt={name}
                          />
                        ))}
                      </div>
                    </hgroup>
                  </div>
                </div>
              )
            )}
        </section>
      )}
    </article>
  );
}
