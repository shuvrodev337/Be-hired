import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
      <nav className="md:flex items-center justify-between ">
        <h3 className="font-bold hover:text-purple-600 text-5xl">BeHired</h3>
       
        <ul className=" lg:flex gap-3">
        <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statictics"
              aria-label="Statictics"
              title="Statictics"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statictics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/applied-jobs"
              aria-label="Applied Jobs"
              title="Applied Jobs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blog"
              title="Blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="btn-primary">Start Applying</button>
      </nav>
    </div>
  );
};

export default Header;
