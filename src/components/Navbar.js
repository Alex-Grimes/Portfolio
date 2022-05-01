import React from "react";
import Logo from 'src/assets/logo.png'
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <FaBars />
      </div>

      <div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div></div>
    </div>
  );
}
