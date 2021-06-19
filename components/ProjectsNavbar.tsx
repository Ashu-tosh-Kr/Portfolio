import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  return (
    <li
      onClick={() => handleFilterCategory(value)}
      className={`capitalize cursor-pointer hover:text-light-fg1 ${
        active === value ? "text-light-fg1" : ""
      }`}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ul>
        <NavItem value={"all"} {...props} />
        <NavItem value={"react"} {...props} />
        <NavItem value={"next"} {...props} />
      </ul>
    </div>
  );
};

export default ProjectsNavbar;
