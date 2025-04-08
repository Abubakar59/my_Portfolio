// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav >
      <div className="flex  font-bold  h-8 w-{100%} justify-between items-center bg-blue-500">

        <div className="ml-2">
          <NavLink to="/">Home</NavLink>
        </div>

        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        <div>
          <NavLink to="/Contact"> Contact</NavLink>
        </div>
        <div>
          <NavLink to="/Playground"> Playground</NavLink>
        </div>

        <div className="mr-2">
          <NavLink to="/Service">Service</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;