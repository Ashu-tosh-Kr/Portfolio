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
    <div className="flex justify-between px-5">
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
