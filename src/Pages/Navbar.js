import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/to-do">To-Do</NavLink>
      </li>
      <li>
        <NavLink to="/completed-tasks">Completed Tasks</NavLink>
      </li>

      <li>
        <NavLink to="/calendar">Calendar</NavLink>
      </li>
     
    </>
  );
  return (
    <div className="mx-0 navbar bg-base-300 px-14">
      <div className="navbar-start">
       
        <h1>Daily Task</h1>
        
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex ">
          <ul className="p-0 menu menu-horizontal">{menuItems}</ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 gap-x-3"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
