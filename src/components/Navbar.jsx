import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "data";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container 3xl:max-w-full navbar-glass z-30 py-5">
      <NavLink to={"/"}>
        <img src="/hilink-logo.svg" alt="logo" />
      </NavLink>

      <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50">
            {link.text}
          </NavLink>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <NavLink to="/signin">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </NavLink>
      </div>

      <img
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
