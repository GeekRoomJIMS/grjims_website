import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className="relative group text-white text-xl px-4 py-2 hover:translate-y-[-5px] transition-transform duration-300 ease-out"
      >
        Home
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-300 to-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
      </NavLink>
      <NavLink
        to="/events"
        className="relative group text-white text-xl px-4 py-2 hover:translate-y-[-5px] transition-transform duration-300 ease-out"
      >
        Events
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-300 to-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
      </NavLink>
      <NavLink
        to="/achievements"
        className="relative group text-white text-xl px-4 py-2 hover:translate-y-[-5px] transition-transform duration-300 ease-out"
      >
        Achievements
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-300 to-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
      </NavLink>
      <NavLink
        to="/blogs"
        className="relative group text-white text-xl px-4 py-2 hover:translate-y-[-5px] transition-transform duration-300 ease-out"
      >
        Blogs
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-teal-300 to-green-400 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col items-center basis-full md:hidden">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;