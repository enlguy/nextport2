"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";

const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="mx-auto top-0 left-0 right-0 z-10 bg-opacity-100 bg-[#121212 mb-10">
      <div className="flex container flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-4xl text-white font-semibold"
        >
          <Image
            src="/jacklogo.svg"
            alt="logo"
            className="absolute transform -translate-x-[-20] -translate-y-[-10] top-[-10] left-10"
            width={150}
            height={150}
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
