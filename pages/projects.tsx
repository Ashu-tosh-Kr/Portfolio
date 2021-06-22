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
      className="px-2 pt-2 overflow-y-scroll"
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
