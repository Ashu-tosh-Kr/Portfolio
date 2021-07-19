import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a onClick={() => setActiveItem(name)}>
        <span className="hover:text-light">{name}</span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    pathname === "/" && setActiveItem("About");
    pathname === "/projects" && setActiveItem("Projects");
    pathname === "/resume" && setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between p-3 px-5 mx-2 mb-2 shadow-custom-light backdrop-filter dark:shadow-custom-dark backdrop-blur-sm bg-gradient-to-tr from-glass-50 to-glass-30 dark:from-dark-700 dark:to-dark-700 lg:col-span-9 rounded-2xl">
      <span className="text-lg font-bold border-b-4 lg:text-xl text-light-fg2 border-light-fg2 dark:text-light dark:border-light">
        {activeItem}
      </span>
      <div className="flex space-x-3 text-sm lg:text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
