import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";k

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav__logo">
        <h2><span className="h2">P</span>hoto<span className="h2">G</span>allery</h2>
      </span>
      <div className="nav__logo">
        <a href="/">
          <AiOutlineHome />&nbsp;Home
        </a>
      </div>
      

    </nav>
  );
};

export default Navbar;
