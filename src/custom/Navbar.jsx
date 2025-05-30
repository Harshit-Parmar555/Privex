import React from "react";
import logo from "../assets/logo.png";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-black/20 border-b-[1px] border-zinc-900 flex items-center justify-between px-6 lg:px-16 fixed">
      <div className="flex items-center gap-1">
        <div className="h-5 w-5 ">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-contain invert"
          />
        </div>
        <h1 className="text-white font-[JetBrains_Mono]">Privex</h1>
      </div>
      <div className="flex items-center gap-8 text-xl text-zinc-600">
        <a
          href="https://github.com/Harshit-Parmar555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-zinc-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/harshit-parmar-47253b282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-zinc-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
        </a>

        <a
          href="https://x.com/HARSHIT18554445?t=3VdU7yZsWnjNuPcle76cTQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-zinc-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
