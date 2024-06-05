import React from "react";
import cardImage from "../assets/images/168.webp";

const Cards = ({ date, title, description, teams, status }) => {
  return (
    <div className=" max-w-[20rem] md:max-w-7xl mx-auto my-3 md:my-10">
      <div className="max-w-[23rem] mx-auto  bg-[#fffafa] rounded-lg shadow ">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={cardImage}
            alt="code kshetra hackathon"
          />
        </a>
        <div className="p-3 md:p-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-800 ">{description}</p>

          <div className="mb-4">
            {teams ? (
              <h2 className="text-slate-900 md:text-xl text-base font-bold ">
                Teams Participated {teams}
              </h2>
            ) : (
              ""
            )}
            <p className="text-slate-900 font-bold text-lg">{date}</p>
          </div>
          <button className="inline-flex items-center px-3 py-2 text-sm duration-700 text-center font-bold hover:text-slate-900 hover:bg-[#80ed99] rounded-lg bg-slate-900 text-[#80ed99] ">
          {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
