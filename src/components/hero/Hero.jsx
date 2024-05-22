import React from "react";
import "./app.css";

function Hero() {
  return (
    <>
      {/* <div
        class="main"
        className="flex flex-col bg-no-repeat bg-center"
        id="header"
      >
        <header class="animate-swingIn">
          <h1 className="font-bold text-9xl text-white">Geek Room</h1>
          <br />
          <br />
          <p className="text-3xl text-white animate-pulse">
            {" "}
            Connect. Learn. Grow
          </p>
        </header>
      </div> */}
      <div className="App">
        <div className="left-column hidden md:block"></div>
        <div className="right-column w-full md:w-6/12 h-full flex flex-col justify-center items-center px-4 md:px-0">
          <h1 className="mt-28 text-4xl md:text-5xl lg:text-7xl font-bold text-center">
            Geek Room
          </h1>
          <h3 className="relative bottom-3 md:bottom-5 z-10 text-xl md:text-3xl font-[cursive] italic text-blue-400 text-center">
            JIMS
          </h3>
          <p className="py-8 text-center md:text-lg">
            A hub for college students passionate about coding. It connects you
            with other coders, providing a platform to share knowledge and
            collaborate. The community also organizes exciting events like
            hackathons to hone your coding skills and creativity.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
