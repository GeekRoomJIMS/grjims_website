import React from "react";
import "./app.css";
import curve from "../../assets/curve.png";

function Hero() {
  return (
    <>
      {/* <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6">
          &nbsp;Geek&nbsp;Room{` `}
          <span className="inline-block relative">
            JIMS{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unleash the power of every AI within Nexus. Upgrade your productivity 
          and save money with Nexus, the all-in-one AI solution
        </p>
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