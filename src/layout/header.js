import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-purple-900 text-center bg-blue-400  font-bold text-3xl content-center">
      <h1>Header</h1>
      <div className="text-black font-semibold my-5 flex gap-5 justify-center items-center ">
        <NavLink className={({isActive}) => (isActive ? "underline" : "")} to="/" >Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? "underline" : "")} to="/about" >About</NavLink>
        <NavLink className={({isActive}) => (isActive ? "underline" : "")} to="/profiles">Profiles</NavLink>
        <NavLink className={({isActive}) => (isActive ? "underline" : "")} to="/contact">Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;
