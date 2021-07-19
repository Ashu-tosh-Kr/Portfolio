import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { useState } from "react";
import { Category } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";

const Projects = () => {
  const [projects, setprojects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setprojects(projectsData);
      setActive(category);
    } else {
      const newArray = projectsData.filter((project) =>
        project.category.includes(category)
      );
      setprojects(newArray);
      setActive(category);
    }
  };

  return (
    <motion.div
      className="flex flex-col px-2 pt-2 m-1 mb-3 overflow-scroll overflow-y-scroll w-screen95 md:w-screen50 scrollbar-hide md:h-screen75 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-70 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl"
      style={{ height: "75vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className="">
        <ProjectsNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
      </nav>
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            key={projects.indexOf(project)}
            className="col-span-12 p-2 rounded-md shadow-lg sm:col-span-6 lg:col-span-4 bg-gradient-to-tr from-glass-50 to-glass-70 dark:from-dark-200 dark:to-dark-200"
            variants={fadeInUp}
          >
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
