import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <NavLink to={"/"} >Recursive-partitioning</NavLink>
        <NavLink to={"/alphabet"} >Recursive-partitioning</NavLink>
      </div>
    );
};

export default Navbar;