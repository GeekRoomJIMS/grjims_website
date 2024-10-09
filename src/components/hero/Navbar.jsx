import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="bg-dark-background top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-gray-500 px-6 py-2 border-b border-white/10 backdrop-blur-3xl fixed shadow-xl shadow-blue-300/5">
      <Logo />
      <Nav />
    </header>
  );
};

export default Navbar;
