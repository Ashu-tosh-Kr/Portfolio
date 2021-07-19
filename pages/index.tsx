import { useState } from "react";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow p-4 pt-1 m-1 mb-3 overflow-scroll align-middle w-screen95 md:w-screen50 scrollbar-hide md:h-screen75 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-70 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="mt-3 font-medium">
        Hi visitor!, here's a little something about me. I'm currently pursuing
        B.tech from SRM IST(3rd year). Below are the list of skills that fall
        under my circle of competency.
      </h5>
      <div
        className="flex-grow px-10 py-4 mt-5 none dark:contents dark:bg-dark-100"
        // style={{ marginLeft: "-2.5rem", marginRight: "-2.5rem" }}
      >
        <h6 className="my-2 text-xl font-bold tracking-wider">What I Offer</h6>
        <motion.div
          className="grid gap-y-12 gap-x-12 lg:grid-cols-2 "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((skill) => (
            <motion.div
              key={skill.title}
              className="flex items-center p-2 space-x-4 rounded-lg shadow-custom-light dark:shadow-custom-dark bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-700 dark:to-dark-700 lg:col-span-1"
              variants={fadeInUp}
            >
              <skill.Icon className="w-12 h-12 text-light-fg1t dark:text-light " />
              <div>
                <h4 className="font-bold">{skill.title}</h4>
                <p>{skill.about}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
