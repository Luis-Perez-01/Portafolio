import { createContext, useState, useEffect } from "react";
import api from "../api";

interface Project {
  _id: string;
  name: string;
  summary: string;
  description: string;
  url: string;
  state: boolean;
  technologies: string[];
  desktopImage: string;
  mobileImage: string;
  createdAt: string;
  updatedAt: string;
}

interface ProjectsContextType {
  projects: Project[];
  isLoading?: boolean;
}

const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType
);

const ProjectsProvider = ({ children }: { children: any }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    api.projects.getAll
      .fetch()
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, isLoading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider };
export default ProjectsContext;
