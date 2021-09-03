import { FunctionComponent } from "react";
import { languages, tools } from "../data";
import { ISkill } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-10/12 my-4 text-white rounded-full shadow-custom-light dark:shadow-custom-dark bg-glass-50 w-50 dark:bg-dark-100">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-light-fg1t to-light-fg2t dark:from-light-fg1 dark:to-light-fg2"
        style={{ width: level }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

const resume = () => {
  return (
    <motion.div
      style={{ scrollbarWidth: "thin", scrollbarColor: "#a276cb transparent" }}
      className="flex flex-col p-4 mb-3 overflow-x-hidden overflow-y-scroll md:h-screen75 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Edu and Exp */}
      <motion.div
        className="flex flex-col justify-between p-4 px-8 mb-8 border-2 rounded-2xl lg:flex-row w-screen91 md:w-screen50 "
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        {/* Education */}
        <div className="">
          <h5 className="mt-1 mb-1 text-2xl font-bold">Education</h5>
          <div className="flex p-2 justify-evenly md:flex-col shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-50 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
            <div className="mb-1 ">
              <h5 className="text-lg font-medium">B.Tech</h5>
              <p className="text-xs">SRM IST</p>
              <p className="text-xs">2023 | CGPA: 9.85</p>
            </div>
            <div className="mb-1">
              <h5 className="text-lg font-medium">Class 12</h5>
              <p className="text-xs">BDMI</p>
              <p className="text-xs">2018 | Percent: 89.2%</p>
            </div>
            <div className="mb-1">
              <h5 className="text-lg font-medium">Class 10</h5>
              <p className="text-xs">BDMI</p>
              <p className="text-xs">2016 | CGPA: 10</p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div>
          <h5 className="my-1 ml-4 text-2xl font-bold">Experience</h5>
          <div className="p-2 mb-4 ml-4 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-50 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
            <h5 className="ml-2 text-lg font-medium">
              Freelancing | Jio-tesseract Project |
              <span className="ml-1 text-xs font-normal">
                Frontend Developer
              </span>
            </h5>
            <span className="ml-2 text-xs font-normal">
              July 2021 - September 2021
            </span>
            <li className="ml-4 text-xs ">
              Sole front-end developer for the first 4 life cycles.
            </li>

            <li className="ml-4 text-xs ">
              Used React, HOC for auth, Formik for form management, Yup for
              validation, CSS Modules, Bootstrap and MUI for UI.
            </li>
            <li className="ml-4 text-xs ">
              Used Custom Hooks with React-Query for handling 37 API
              integrations.
            </li>
          </div>
          <div className="p-2 mb-3 ml-4 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-50 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
            <h5 className="ml-2 text-lg font-medium">
              Internship | Tech-Analogy |
              <span className="ml-1 text-xs font-normal">
                Software Development Intern
              </span>
            </h5>
            <span className="ml-2 text-xs font-normal">
              June 2021 - Present
            </span>
            <li className="ml-4 text-xs ">
              Developed a careers portal with Next.js(Typescript), Tailwind CSS
            </li>
            <li className="ml-8 text-xs list-none">
              -A Frontend registration portal for courses offered by
              Tech-Analogy
            </li>
            <li className="ml-8 text-xs list-none">
              -Improved portal's lighthouse performance by 21% and accessiblity
              rating to 100%
            </li>
            <li className="ml-4 text-xs ">
              Project Manager for Tech-analogy Main website
            </li>
            <li className="ml-8 text-xs list-none">
              -Managed a team of 7 people and delivered the project on time.
            </li>
            <li className="ml-8 text-xs list-none">
              -Setup Contentful for website's content management.
            </li>
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 p-4 mb-2 md:grid-cols-2 w-screen91 md:w-screen50 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-70 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
        {/* Lang and Frameworks */}
        <div>
          <h5 className="my-5 text-2xl font-bold">Lang & Frameworks</h5>
          <div className="my-2 rounded-lg">
            {/*bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-700 dark:to-dark-700*/}
            {languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        {/* Tools & Software */}
        <div>
          <h5 className="my-5 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2 rounded-lg">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
