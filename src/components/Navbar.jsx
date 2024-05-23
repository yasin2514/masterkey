import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-ful py-5 gap-10 text-lg shadow-sm bg-black">
      <NavLink
        to={"/"}
        className={({ isActive }) => isActive ? "text-red-500":"text-white"}
      >
        Recursive-partitioning
      </NavLink>
      <NavLink
        to={"/alphabet"}
        className={({ isActive }) => isActive ? "text-red-500":"text-white"}
      >
        Recursive-partitioning
      </NavLink>
    </div>
  );
};

export default Navbar;
