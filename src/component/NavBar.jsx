// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav >
      <div className="flex  font-bold ml-1 h-8  justify-between items-center">

        <div className="">
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/Resume">Resume</NavLink>
        </div>
        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        <div>
          <NavLink to="/Contact"> Contact</NavLink>
        </div>
        <div className="mr-2">
          <NavLink to="/Service">Service</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;