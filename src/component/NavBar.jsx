// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav >
      <div className="flex  font-bold ml-2 hover:to-blue-100 h-8  justify-between items-center">
        <h1 className=" text-2xl">Abubakar</h1>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/Resume">Resume</NavLink>
        </div>
        <div>
          <NavLink to="/About">About</NavLink>
        </div>
        <div>
          <NavLink to= "/Contact"> Contact</NavLink>
        </div>
        <div className="ml-1">
          <NavLink to= "/Service">Service</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;