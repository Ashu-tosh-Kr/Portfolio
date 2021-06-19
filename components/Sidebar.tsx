import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setTheme("light");
  // }, []);

  return (
    <div>
      <Image
        width={100}
        height={100}
        className="w-32 h-32 mx-auto rounded-full"
        src={`/assets/profile-${theme === "dark" ? "dark" : "light"}.jpeg`}
        alt="user avatar"
      />
      <h3 className="my-2 text-xl font-medium tracking-wider font-kaushan">
        <span className="text-light-fg2 dark:text-light">Ashutosh</span> Kumar
      </h3>
      <p className="px-2 py-1 my-3 rounded-full shadow-custom-light bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-200 dark:to-dark-200">
        Web Developer
      </p>
      <a
        className="flex justify-center px-2 py-1 my-3 rounded-full shadow-custom-light bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-200 dark:to-dark-200 align-center"
        href=""
        download="name"
      >
        <GiTie className="w-5 h-5" />
        Download Resume
      </a>

      {/* Social icons */}
      <div className="flex w-9/12 mx-auto text-light-fg2 dark:text-light md:w-full justify-evenly">
        <a
          href="https://www.linkedin.com/in/ashutosh-kumar-0195151a6/"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/Ashu-tosh-Kr" target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-2 my-5 bg-gradient-to-tr from-glass-50 to-glass-90 dark:from-dark-100 dark:to-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Kolkata, India</span>
        </div>
        <p className="my-2">kr.ashu465@gmail.com</p>
        <p className="my-2">+91-8617251687</p>
      </div>

      {/*button */}
      <button
        onClick={() => window.open("mailto:kr.ashu465@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r shadow-custom-light dark:shadow-custom-dark from-light-fg1t to-light-fg2t dark:from-light-fg1 dark:to-light-fg2 focus:outline-none"
      >
        E-mail Me
      </button>
      <button
        suppressHydrationWarning
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8/12 px-5 py-2 my-2 text-white capitalize rounded-full shadow-custom-light dark:shadow-custom-dark bg-gradient-to-r from-light-fg1t to-light-fg2t dark:from-light-fg1 dark:to-light-fg2 focus:outline-none"
      >
        {theme === "light" ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
};

export default Sidebar;
