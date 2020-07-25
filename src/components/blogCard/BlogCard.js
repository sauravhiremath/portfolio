import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, isDark }) {
  return (
    <div>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a className={isDark ? "dark-mode blog-card":"blog-card"} href="#blog" >
          <h3 className={isDark ? "small-dark blog-title":"blog-title"}>{blog.title}</h3>
          <p className={isDark ? "small-dark small":"small"}>{blog.description}</p>
          <div className="go-corner" >
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
