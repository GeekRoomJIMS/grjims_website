import React, { useState } from "react";
import { useParams }  from "react-router-dom";
import { images } from "./Images";


const BlogDetail = () => {
  const { id } = useParams();
  const blogs = [
    {
      id: 4,
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 25, 2024",
      summary: "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      content: "React Hooks have fundamentally changed the way we write React components. They allow us to use state and other React features without writing a class. This article explores the core hooks such as useState, useEffect, and custom hooks. We dive into how to manage state and side effects in functional components and provide practical examples. Understanding hooks can make your React code cleaner, more maintainable, and efficient, thereby improving both development speed and application performance.",
      imageUrl: images.blog
    },
    {
      id: 1,
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 10, 2024",
      summary: "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      content: "TypeScript is a powerful superset of JavaScript that introduces static typing, which helps catch errors early in the development process. This guide provides an introduction to TypeScript, covering its basic types, interfaces, and classes. We also discuss setting up a TypeScript environment and integrating it into existing JavaScript projects. Using TypeScript can lead to more reliable and maintainable code by reducing runtime errors. By the end of this tutorial, you'll have the knowledge needed to start using TypeScript in your own projects.",
      imageUrl: images.blog
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 15, 2024",
      summary: "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      content: "React Hooks offer a new way to handle state and side effects in React applications. This comprehensive guide introduces you to core hooks like useState and useEffect, and explains how to create custom hooks for reusable logic. Through practical examples, you'll learn how to effectively manage component lifecycle and state transitions. Mastering hooks can enhance the functionality and readability of your React components, leading to more efficient and organized codebases. This article aims to provide a thorough understanding of hooks for both beginners and experienced developers.",
      imageUrl: images.blog
    },
    {
      id: 3,
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 23, 2024",
      summary: "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      content: "Starting with TypeScript can transform the way you write JavaScript. This beginner-friendly guide covers the essentials of TypeScript, including its type system, type inference, and the benefits of using types to catch errors early. We explore how to transition from JavaScript to TypeScript, including setting up your development environment and converting existing code. Leveraging TypeScript's features can enhance your code's reliability and readability, making maintenance easier. This tutorial aims to provide a solid foundation in TypeScript for developers of all skill levels.",
      imageUrl: images.blog
    },
    {
      id: 5,
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 29, 2024",
      summary: "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      content: "In this article, we delve into React Hooks, focusing on their ability to simplify state management and side effects in functional components. Hooks like useState, useEffect, and custom hooks allow developers to write cleaner and more reusable code. We provide practical examples and best practices for using hooks in real-world scenarios, demonstrating how they can replace traditional class-based components. Understanding and applying hooks can help you create more efficient and maintainable React applications. This guide aims to equip you with the skills needed to fully leverage the power of React Hooks.",
      imageUrl: images.blog
    },
  ];
  

  const blog = blogs.find(blog => blog.id === parseInt(id));

if (!blog) {
  return <div>Blog not found</div>;
}
  return (
    <div className="h-[100vh] blog-detail">
      <div className="container">
        <img src={images.blog} className="image" />

        <div className="blog-detail-card">
          <div className="content">
            <div className="flex gap-3">
              <p className="author">{blog.author}</p>
              <p className="font-bold">|</p>
              <p className="date">{blog.date}</p>
            </div>
            <h1 className="title fs-1 font-medium my-2">{blog.title}</h1>
            <p className="summary">
              {blog.content}    
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
