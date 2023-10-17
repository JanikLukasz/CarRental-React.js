import React from "react";
import blog from "../assets/data/blog.js";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    <div className="blog">
      <div className="main-article">
        <Link to={`../article/${blog[9].id}`}>
          <div>
            <h2>{blog[9].title1}</h2>
            <p>{blog[9].article1}</p>
            <button>Read Article</button>
          </div>
        </Link>

        <Link to={`../article/${blog[9].id}`}>
          <div className="main-article-image">
            <img src={blog[9].image} alt=""></img>
          </div>
        </Link>
      </div>

      <div className="blog-articles">
        {blog.map((blog) =>
          blog.id !== 9 ? (
            <Link to={`../article/${blog.id}`} key={blog.id} onClick={() => window.scrollTo(0,0)}>
              <Fade top>
                <div className="blog-article">
                  <div className="secondary-article-image">
                    <img src={blog.image} alt="" loading="lazy"></img>
                  </div>
                  <div className="secondary-article-title">
                    <h2>{blog.title1}</h2>
                    <div className="blog-article-button">
                      <button>Read Article</button>
                    </div>
                  </div>
                </div>
              </Fade>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Blog;
