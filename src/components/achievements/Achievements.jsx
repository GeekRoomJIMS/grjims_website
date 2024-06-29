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
        para: "Hosted Delhi's biggest hackathon, hosted @ JIMS, Rohini",
      },
    },
    {
      front: { title: "Techfest", para: "Hackathon" },
      back: {
        title: "Hackathon",
        para: "Hosted a hackathon @ IITM, Janakpuri",
      },
    },
    {
      front: { title: "Code Cubicle", para: "Hackathon" },
      back: {
        title: "Hackathon",
        para: "Hosted a hackathon @ Eccosphere Coworking Space, Noida",
      },
    },
    {
      front: { title: "Algohunt", para: "Problem-Solving Event" },
      back: {
        title: "Event",
        para: "Hosted a treasure-styled problem solving event",
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
