import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import { images } from "./Images";
import Navbar from "../hero/Navbar";
import Footer from "../Footer";

const blogs = [
  {
    id: 1,
    title: "NVIDIA vs MICROSOFT",
    author: "Geekroom Jims",
    date: "June 25, 2024",
    summary:
      "NVIDIA briefly surpassed Microsoft as the world's most valuable company due to its AI advancements, but Microsoft's stock rebound quickly reclaimed the top spot.",
    imageUrl: images.blog,
  },
  {
    id: 2,
    title: "GPT-4o",
    author: "Geekroom Jims",
    date: "May 13, 2024",
    summary: "Why is GPT-4o free ? 🤔",
    imageUrl: images.blog,
  },
  {
    id: 3,
    title: "GenAi and LLMs are the talk of the town 🚀",
    author: "Geekroom Jims",
    date: "June 15, 2024",
    summary:
      "India is advancing in GenAI with innovative models like Krutrim and BharatGPT, and strategic partnerships with Nvidia, highlighting its growing AI capabilities.",
    imageUrl: images.blog,
  },
  {
    id: 4,
    title: "Getting Started with TypeScript",
    author: "John Smith",
    date: "June 23, 2024",
    summary:
      "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
    imageUrl: images.blog,
  },
  {
    id: 5,
    title: "Understanding React Hooks",
    author: "Jane Doe",
    date: "June 29, 2024",
    summary:
      "An in-depth look at how React hooks work and how to use them effectively in your projects.",
    imageUrl: images.blog,
  },
];

const BlogCard = ({ id, title, author, date, summary, imageUrl }) => (
  <div className="blog-card flex-wrap h-[26rem]">
    <img src={imageUrl} alt={title} className="blog-card__image" />
    <div className="blog-card__content">
      <div className="flex justify-content-between gap-3">
        <p className="blog-card__author">By {author}</p>
        <p className="blog-card__date">{date}</p>
      </div>
      <h3 className="blog-card__title">
        <Link to="/blog-detail">{title}</Link>
      </h3>
      <p className="blog-card__summary text-wrap">{summary}</p>
      <Link
        to={`/blog-detail/${id}`}
        className="inline-flex items-center px-3 py-2 text-sm duration-700 text-center font-bold text-slate-900 bg-[#80ed99] rounded-lg "
      >
        Read More
      </Link>
    </div>
  </div>
);

const Blogs = () => {
  const [sortAscending, setSortAscending] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const toggleSortingOrder = () => {
    setSortAscending(!sortAscending);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortAscending ? dateA - dateB : dateB - dateA;
  });

  const filteredBlogs = sortedBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[100vh] blog-page">
      <Navbar />
      <div className="container px-[1.5rem]">
        <div className="flex align-items-center flex-col md:flex-row justify-content-between py-4 mb-4">
          <h1 className=" text-3xl md:text-5xl font-medium">Blogs</h1>
          <div className="flex gap-x-6 mt-3">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </label>
            <button
              className="flex justify-center font-medium text-2xl gap-x-2 md:gap-x-3 items-center"
              onClick={toggleSortingOrder}
            >
              Sort
              <span className="text-[#80ed99]">
                {sortAscending ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
              </span>
            </button>
          </div>
        </div>
        <div className="blog-cards grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {filteredBlogs.map((blog, index) => (
            <div>
              <BlogCard key={index} {...blog} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 ">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
