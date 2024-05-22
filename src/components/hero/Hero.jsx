import React from "react";
import jims from "../../assets/images/jims.png";
import "./app.css";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <Navbar />
      {/* <div> */}
      {/* <nav class="bg-gray-800"> */}
      {/* <div class="mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
      {/* <div class="relative flex h-16 items-center justify-between"> */}
      {/* Logo on the left */}
      {/* <div class="flex h-50 w-50 mx-1 flex-shrink-0 ">
                <img src={jims} alt="logo" id="img" class="h-12 w-auto " />
              </div> */}

      {/* Navigation links on the right */}
      {/* <div class="hidden sm:block">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Achievements
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Blogs
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* Mobile Menu */}
      {/* <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Achievements
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Events
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Blogs
              </a>
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav> */}
      {/* </div> */}

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
      {/* <div class="relative h-32 w-32 ...">
        <div class="absolute inset-x-0 bottom-0 h-16 ...">
          <h1 className="text-white">Know more</h1>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
