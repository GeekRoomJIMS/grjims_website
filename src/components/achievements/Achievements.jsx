import React from "react";
import styles from "./index.module.css";
import Navbar from "../hero/Navbar";
import Footer from "../Footer";

const Index = () => {
  const cardData = [
    {
      title: "Code Kshetra",
      para: "Hackathon",
      details: "Organized Delhi's one of the largest hackathons, with 400+ active coders, 50 Lakh+ prize pool, and a devfolio rating of 4.5.",
    },
    {
      title: "Techfest Win",
      para: "Hackathon",
      details: "1st Prize at Techminds Hackathon @ IITM Janakpuri",
    },
    {
      title: "SIH Finalists",
      para: "Hackathon",
      details: "2 Teams from GeekRoom JIMS to Smart India Hackathon Finals.",
    },
    {
      title: "Code Hunt",
      para: "Event",
      details: "1st Prize at Coding Competition Code Hunt organized by TechQube.",
    },
    {
      title: "Hack Vortex",
      para: "Tech Fest",
      // details: "1st Prize at Coding Competition Hack Vortex organized by TechQube.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className="maincontainer">
          <div className={styles.innercontainer}>
            <div className={styles.bgimg}>
              {/* Background Image */}
              <img src="/achievements_page/1.png" alt="Background" />
            </div>
            <div className={styles.img}>
              {/* Rocket Image */}
              <img src="/achievements_page/1.png" alt="Rocket" className="w-22 h-22" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>
                <h1 className="text-4xl md:text-6xl font-bold text-center mt-6 md:mt-12">ACHIEVEMENTS</h1>
              </div>
              <div className={styles.cardscontainer}>
                {/* Responsive grid with spacing between cards */}
                <div className="mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      tabIndex={0} // Adds focus state for mobile
                      className="w-full h-[320px] bg-gradient-to-r from-[#00ff75] to-[#3700ff] rounded-[20px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.3)] hover:transform hover:-translate-x-1 hover:-rotate-1 mx-auto my-6 focus:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.3)] focus:transform focus:-translate-x-1 focus:-rotate-1"
                    >
                      <div className="w-full h-full bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-[20px] transition-all duration-200 hover:scale-98 focus:scale-98 flex flex-col justify-center items-center text-white p-4">
                        <h3 className="font-bold text-lg">{card.title}</h3>
                        <p className="text-gray-300 text-md">{card.para}</p>
                        <p className="text-gray-400 mt-2 text-sm text-center">{card.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
