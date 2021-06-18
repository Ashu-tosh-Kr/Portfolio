import { FunctionComponent } from "react";
import { languages, tools } from "../data";
import { ISkill } from "../types";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="w-10/12 my-4 text-white rounded-full shadow-custom-light dark:shadow-custom-dark bg-glass-50 w-50 dark:bg-dark-100">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-light-fg1t to-light-fg2t dark:from-light-fg1 dark:to-light-fg2"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* Edu and Exp */}
      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">B.Tech in CSE</h5>
            <p className="font-semibold">SRM IST</p>
            <p className="my-3">Competitive Coder And Developer</p>
          </div>
        </div>
        {/* Experience */}
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Software Development Member
            </h5>
            <ul className="font-semibold">Tech-Analogy(June 2021 - Present)</ul>
            <li className="my-3">Creating a careers portal</li>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Lang and Frameworks */}
        <div>
          <h5 className="my-5 text-2xl font-bold">Languages & Frameworks</h5>
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
            {/*bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-700 dark:to-dark-700*/}
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
