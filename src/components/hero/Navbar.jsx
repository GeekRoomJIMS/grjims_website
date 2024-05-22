import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="bg-dark-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-gray-500 p-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Navbar;
