import React from "react";
import styles from "./index.module.css";
import Navbar from "../hero/Navbar";
import Footer from "../Footer";

const Index = () => {
  const cardData = [
    {
      front: { title: "Code Kshetra", para: "Hackathon" },
      back: {
        title: "Hackathon",
        para: "Organized Delhi's one of the largest hackathon, with 400+ active coders, 50 Lakh+ prize pool and a devfolio rating of 4.5.",
      },
    },
    {
      front: { title: "Techfest Win", para: "Hackathon" },
      back: {
        title: "Hackathon",
        para: "1st Prize at Techminds Hackathon @ IITM Janakpuri",
      },
    },
    {
      front: { title: "SIH Finalists", para: "Hackathon" },
      back: {
        title: "Hackathon",
        para: "2 Teams from GeekRoom JIMS to Smart India Hackathon Finals.",
      },
    },
    {
      front: { title: "Code Hunt", para: "Event" },
      back: {
        title: "Event",
        para: "1st Prize at Coding Competetion Code Hunt organized by TechQube.",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className="maincontainer">
          <div className={styles.innercontainer}>
            <div className={styles.bgimg}>
              <img src="/achievements_page/1.png" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/achievements_page/1.png" alt="" />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>achievements</div>
              <div className={styles.cardscontainer}>
                {cardData.map((card, index) => (
                  <div key={index} className={styles.cardcontainer}>
                    <div className={`${styles.card} ${styles.cardfront}`}>
                      <h3>{card.front.title}</h3>
                      <p>{card.front.para}</p>
                    </div>
                    <div className={`${styles.card} ${styles.cardback}`}>
                      <h3>{card.back.title}</h3>
                      <p>{card.back.para}</p>
                    </div>
                  </div>
                ))}
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
