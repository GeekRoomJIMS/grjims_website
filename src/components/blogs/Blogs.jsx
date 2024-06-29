import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import blog from '../../assets/images/blog.jpg'

const BlogCard = ({ title, author, date, summary, imageUrl }) => (
  <div className="blog-card">
    <Link to='/blog-detail'><img src={imageUrl} alt={title} className="blog-card__image" /></Link>
    <div className="blog-card__content">
      <div className="d-flex justify-content-between gap-3">
        <p className="blog-card__author">By {author}</p>
        <p className="blog-card__date">{date}</p>
      </div>
      <h3 className="blog-card__title"><Link to='/blog-detail'>{title}</Link></h3>
      <p className="blog-card__summary">{summary}</p>
      <Link to='/blog-detail' className="inline-flex items-center px-3 py-2 text-sm duration-700 text-center font-bold text-slate-900 bg-[#80ed99] rounded-lg ">
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

  const blogs = [
    {
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 25, 2024",
      summary:
        "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      imageUrl: blog
    },
    {
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 20, 2024",
      summary:
        "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      imageUrl: blog
    },
    {
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 25, 2024",
      summary:
        "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      imageUrl: blog
    },
    {
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 20, 2024",
      summary:
        "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      imageUrl: blog
    },
    {
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 25, 2024",
      summary:
        "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      imageUrl: blog
    },
    {
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 20, 2024",
      summary:
        "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      imageUrl: blog
    },
    {
      title: "CSS Grid vs. Flexbox",
      author: "Alice Johnson",
      date: "June 15, 2024",
      summary:
        "Comparing CSS Grid and Flexbox to determine which layout system is best for your needs.",
      imageUrl: blog
    },
    {
      title: "Optimizing Web Performance",
      author: "Bob Brown",
      date: "June 10, 2024",
      summary:
        "Tips and techniques for improving the performance of your web applications.",
      imageUrl: blog
    },
  ];
  return (
    <div className="blog-page">
      <div className="container">
        <div className="top d-flex align-items-center justify-content-between py-4 mb-4">
          <h1 className="fs-1 fw-medium">Blogs</h1>
          <div className="flex gap-x-4 mt-3">
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
        <div className="blog-cards row gy-4">
          {blogs.map((blog, index) => (
            <div className="col-12 col-sm-6 col-lg-4">
              <BlogCard key={index} {...blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
