import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
