import React, { useState,useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Cards from "./Cards";
const MainCards = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const [showPreviousEvents, setShowPreviousEvents] = useState(false);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([
    {
      id: 1,
      date: "5-2-2024",
      category: "previous",
      title: "A Thrilling 36 Hour Hackathon",
      description: `Organized by Geek Room a vibrant community dedicated to enhancing
      coding skills, started as an open community for solving
      tech-related queries and participating in college competitions.`,
      teams: 500,
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-05-18",
      category: "upcoming",
      title: "Code Cubicle Semi-Final",
      description: `Organized exclusively by Geek Room at Microsoft Office Gurugram, this hackathon promises an electrifying experience`,
      status: "Register",
    },
    {
      id: 3,
      title: "Code Cubicle Final",
      category: "upcoming",
      date: "2024-05-20",
      place: "Gurugram",
      time: "9:0:0",
      status: "Register",
      description: `Organized exclusively by Geek Room at Microsoft Office Gurugram, this hackathon promises an electrifying experience`,
    },
  ]);
  

 

  const toggleSortingOrder = () => {
    setSortAscending(!sortAscending);
  };

  const togglePreviousEvents = () => {
    setShowPreviousEvents(true);
    setShowUpcomingEvents(false);
  };

  const toggleUpcomingEvents = () => {
    setShowUpcomingEvents(true);
    setShowPreviousEvents(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredAndSortedCards = cards
    .filter((card) => {
      const eventName = card.title.toLowerCase();
      return eventName.includes(searchTerm.toLowerCase());
    })
    .filter(
      (card) => card.category === (showUpcomingEvents ? "upcoming" : "previous")
    )
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortAscending ? dateA - dateB : dateB - dateA;
    });
   

  return (
    <>
      <div className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl flex flex-col lg:flex-row mb-5  justify-center md:justify-around items-center  max-w-7xl mx-auto ">
        <div className="my-3">
        <button className="mr-4 md:mr-10" onClick={togglePreviousEvents}>Previous Events</button>
        <button onClick={toggleUpcomingEvents}>Upcoming Events</button>
        </div>
        <div className="flex gap-x-4 mt-3">
     
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Event name" value={searchTerm}
          onChange={handleSearchChange} name="eventSearch" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          className="flex justify-center gap-x-2 md:gap-x-3 items-center"
          onClick={toggleSortingOrder}
        >
          Sort
          <span className="text-[#80ed99]">
            {sortAscending ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </span>
        </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl md:mx-auto mx-4 gap-x-4 min-h-screen">
        {showPreviousEvents &&
          filteredAndSortedCards
            .filter((card) => card.category === "previous")
            .map((card) => (
              <Cards
                key={card.id}
                date={card.date}
                title={card.title}
                description={card.description}
                teams={card.teams}
                status={card.status}
              />
            ))}
        {showUpcomingEvents &&
          filteredAndSortedCards
            .filter((card) => card.category === "upcoming")
            .map((card) => (
              <Cards
                key={card.id}
                date={card.date}
                title={card.title}
                description={card.description}
                teams={card.teams}
                status={card.status}
              />
            ))}
      </div>
    </>
  );
};

export default MainCards;
