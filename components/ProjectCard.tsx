import { FunctionComponent, useState } from "react";
import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";

const ProjectCard: FunctionComponent<{ data: IProject }> = ({
  data: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="">
      <Image
        width={300}
        height={150}
        layout="responsive"
        src={image_path}
        alt={name}
        className="rounded-md cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="pt-1 text-center">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-4 rounded-md md:grid-cols-2 gap-x-12 bg-gradient-to-tr from-glass-90 dark:from-dark-500 dark:to-dark-500 backdrop-filter backdrop-blur-sm to-white">
          <motion.div
            className=""
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Image
                width={300}
                height={150}
                layout="responsive"
                src={image_path}
                alt={name}
                className="rounded-md"
              />
            </motion.div>
            <motion.div
              className="flex my-4 justify-evenly"
              variants={fadeInUp}
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-700"
              >
                <AiFillGithub /> <span className="">Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-700"
              >
                <AiFillProject /> <span className="">Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className=""
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap px-2 mt-5 space-x-2 tracking-wider text-small "
            >
              {key_techs.map((tech) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 rounded-md dark:bg-dark-700 "
                  key={key_techs.indexOf(tech)}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(false)}
            aria-label="Close"
            className="absolute p-1 rounded-full focus:outline-none top-3 right-3 dark:bg-dark-700"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
