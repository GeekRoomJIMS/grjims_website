import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { images } from "./Images";

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = [
    {
      id: 1,
      title: "NVIDIA vs MICROSOFT",
      author: "Geekroom Jims",
      date: "June 25, 2024",
      summary: "",
      content:
        "NVIDIA became the world's most valuable company, surpassing tech giants like Microsoft, Apple, and Google for a while. 🚀 However, Microsoft reclaimed the crown on June 21, 2024, after NVIDIA's stocks declined by a steep 2%. 📉 The company, co-founded by Jensen Huang, surpassed Microsoft to become the world's most valuable company on June 20, 2024, with a market value of $3.335 trillion. However, it subsequently lost the position to long-time winner Microsoft. 🌟 This clearly demonstrates the volatility present in the market. 💱 NVIDIA's success can be attributed to its focus on graphics processing units (GPUs), which have become essential for artificial intelligence (AI) and data centers. As the demand for AI has skyrocketed, so too has NVIDIA's market cap.While Intel remains a significant player in the chip industry, it has struggled to keep pace with NVIDIA's advancements in AI technology.📉",
      imageUrl: images.blog,
    },
    {
      id: 2,
      title: "GPT-4o",
      author: "Geekroom Jims",
      date: "May 13, 2024",
      summary: "",
      content:
        "Why is GPT-4o free ? 🤔OpenAi, became one of the fastest growing companies in the realm of Ai and research ever since they released the mighty ChatGPT, with the world's biggest investors dying to be a part of the company, they have been charging the customers $20 a month 💵 to use their state-of-the-art GPT-4 model and its capabilities. Last month, OpenAi released GPT-4o, their best LLM till date. 🚀They utilized their launch event to highlight how fast, capable and better their model is than the rest in the market, but ever wondered WHY ARE THEY LETTING USERS AND DEVELOPERS USE THEIR BEST LLM FOR FREE ?? 🤔Well We got some answers:🔹Lagging Behind: It's been an open truth that their most used GPT-3.5 model is now lagging behind, the performance has deteriorated, and the model has last been updated in late 2022's.🔹Competition : With Meta's Llama 3, Google's Gemini, Anthropic's Claude 3, OpenAi can see their competitors are getting ahead in the race, and they need a huge amount of public participation and investor involvement, to get their market share back.🔹More Users = More Data : the larger amount of people use their new model, the larger the amount of data they can collect, and utilize to improve their newer as well as older models.🔹The Store Creation: OpenAi knows that higher the amount of public popularity, higher number of developers will create products using their model, by allowing the users to use GPT-4o for free, it creates much more incentive for developers to create and use more GPTs. ",
      imageUrl: images.blog,
    },
    {
      id: 3,
      title: "GenAi and LLMs are the talk of the town 🚀",
      author: "Geekroom Jims",
      date: "June 15, 2024",
      summary: "",
      content:
        "GenAi and LLMs are the talk of the town 🚀, every company is rushing to get their latest and greatest LLM in the market, but wonder how India is performing in this High-Profile race? 🤔Here are some LLMs from India:🔹KRUTRIM: The hottest topic these days, Krutrim is a Large Language Model developer by Krutrim Si Designs, an AI venture by OLA. The model will support 20+ languages, being trained on 2 trillion tokens and offering 7 and 13 billion parameter models.🔹BharatGPT (CoRover.ai): CoRover.ai's BharatGPT has been generating a lot of buzz. It supports a whopping 120+ languages, including 14 officially recognized Indian languages, and claims a user base exceeding 1 billion. Their LLM is currently being used in India at IRCTC, LIC, IGL, Bhashini and many more renowned names.🔹Project Indus (Tech Mahindra): Tech Mahindra's initiative to create an open-source LLM tailored for Indian scenarios. The model can supposedly work with most of the Indic languages with 37 dialects planned for the initial release. The model is currently undergoing beta testing within Tech Mahindra with 539 million parameters and is being trained on 10 billion tokens.🔹IndicBERT (AI4Bharat): Another made-in-India LLM, built on the ALBERT architecture (a variant of the BERT architecture). The model currently supports 12 major Indian languages and is an open-source model available on GitHub and Hugging Face (AI4Bharat HuggingFace). The model has been trained on a total of 8.9 billion tokens (combining all supported languages).🔹The Tata and Nvidia Alliance: Tata and Nvidia are joining forces to create a cutting-edge AI supercomputer powered by Nvidia's next-generation GH200 chip. This supercomputer will provide the immense processing power required to train and run large language models, which are computationally very demanding.🔹The Reliance and Nvidia Partnership: Jio, a subsidiary of Reliance Industries, will leverage Nvidia's expertise to construct cutting-edge AI computing data centers across India. Reliance will be utilizing Nvidia's advanced technologies, including the powerful GH200 Grace Hopper Superchip and the DGX Cloud, to address the processing needs of LLMs.What do you think of the progress India has made so far in the field of GenAi and LLMs?",
      imageUrl: images.blog,
    },
    {
      id: 4,
      title: "Getting Started with TypeScript",
      author: "John Smith",
      date: "June 23, 2024",
      summary:
        "A beginner-friendly guide to integrating TypeScript into your JavaScript projects.",
      content:
        "Starting with TypeScript can transform the way you write JavaScript. This beginner-friendly guide covers the essentials of TypeScript, including its type system, type inference, and the benefits of using types to catch errors early. We explore how to transition from JavaScript to TypeScript, including setting up your development environment and converting existing code. Leveraging TypeScript's features can enhance your code's reliability and readability, making maintenance easier. This tutorial aims to provide a solid foundation in TypeScript for developers of all skill levels.",
      imageUrl: images.blog,
    },
    {
      id: 5,
      title: "Understanding React Hooks",
      author: "Jane Doe",
      date: "June 29, 2024",
      summary:
        "An in-depth look at how React hooks work and how to use them effectively in your projects.",
      content:
        "In this article, we delve into React Hooks, focusing on their ability to simplify state management and side effects in functional components. Hooks like useState, useEffect, and custom hooks allow developers to write cleaner and more reusable code. We provide practical examples and best practices for using hooks in real-world scenarios, demonstrating how they can replace traditional class-based components. Understanding and applying hooks can help you create more efficient and maintainable React applications. This guide aims to equip you with the skills needed to fully leverage the power of React Hooks.",
      imageUrl: images.blog,
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="h-[100vh] blog-detail bg-yellow-400">
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
            <p className="summary">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
