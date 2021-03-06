import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/CatwikiLogo.svg";

function Navbar() {
  return (
    <nav className="max-w-[1440px] mx-auto py-9 px-24">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
