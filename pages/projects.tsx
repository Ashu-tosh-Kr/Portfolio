import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="p-4">
      <nav className="">Navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={projects.indexOf(project)}
            className="col-span-12 p-2 rounded-md shadow-lg sm:col-span-6 lg:col-span-4 bg-gradient-to-tr from-glass-50 to-glass-70 dark:from-dark-200 dark:to-dark-200"
          >
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
