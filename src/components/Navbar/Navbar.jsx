import React from "react";
import { NavLink } from "react-router";
import githubImg from "../../assets/fi_2111432.png";
import heroImg from "../../assets/logo-D9NHcesw 1.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}> Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}> Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn md:ml-2 btn-ghost text-[20px] text-[#632EE3]">
            {" "}
            <img src={heroImg} alt="Hero-Img" />
            <NavLink to={"/"}>HERO.IO</NavLink>
          </div>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}> Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}> Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-6">
          <a
            href="https://github.com/"
            className="text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <img src={githubImg} alt="" /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
