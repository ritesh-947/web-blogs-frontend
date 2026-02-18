import React, { useState } from "react";
import "./BlogList.css";

const blogs = [
  {
    id: 1,
    title: "Understading the basic law of making money ✓",
    description:
      "Learn how money works, how to earn money, how to be self-employed, how money flows, how to start a business — all in one blog!",
    image: "/money_secret.png",
    date: "10 Dec 2025",
    link: "/how-to-be-rich-effective-practical-guides",
  },
  {
    id: 2,
    title: "Startup Talk: Jobs vs Building Something of Your Own",
    description:
      "Why chasing comfort jobs holds students back, and how startups, problem-solving, and value creation can lead to massive impact and wealth.",
    image: "/startup_talk.png",
    date: "25 Jan 2026",
    link: "/blogs/job-vs-startup",
    content: [
      "From Rich Dad Poor Dad, I read that the acronym of JOB is Just Over Job. Whether you agree or not, a stable high-paying job attracts most students. But it’s disappointing to see how few are eager to work on their own ideas. If the same dedication and effort were put into a startup idea, many could build million-dollar ventures. If a product solves a real user problem, improves experience, or removes pain points, people will pay for it. With the internet at our fingertips, a web app or mobile app can instantly reach millions. Even if only one million people use it, ads alone can make you a multimillionaire within a year.",
      
      "The competition to become a founder is actually very low. Hiring is easy because many people prefer working on someone else’s idea. Startups are not easy, but they are highly rewarding. Founders don’t feel like they’re working when building their own product. The journey from 0 to 1 and then scaling is adventurous. Customers are everything — providing real value is why people vote for your startup with their money.",
      
      "A startup is a business with uncertainty. Sometimes you create a new market; other times you make an existing idea better. Complaints like ‘I wish this was easier’, ‘I hate doing this’, or ‘I face this problem often’ are real startup opportunities. It feels broken seeing students choose comfort over chaos. I wish students focused not only on internal value but on creating external value — building products, companies, and something greater than themselves."
    ]
  },
];

const BlogList = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`page ${darkMode ? "dark" : ""}`}>
      <div className="toggle">
        {/* <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button> */}
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <img src={blog.image} alt={blog.title} />
            </a>

            <div className="blog-content">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <h2 className="blog-title">{blog.title}</h2>
              </a>
              <div className="blog-date">{blog.date}</div>
              <p className="blog-desc">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;