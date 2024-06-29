import React from "react";
import "./app.css";
import curve from "../../assets/curve.png";

function Hero() {
  return (
    <>
    <div className="App">
        <div className="left-column hidden md:block"></div>
        <div className="right-column w-full md:w-6/12 h-full flex flex-col justify-center items-center px-4 md:px-0">
          <h1 className="mt-28 text-4xl md:text-5xl lg:text-7xl font-bold text-center">
            Geek Room
          </h1>
          <span className="inline-block relative mt-4  lg:text-6xl font-bold">
            JIMS{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-18"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
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