import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
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
