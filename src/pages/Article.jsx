import React from "react";
import "../styles/article.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useParams } from "react-router-dom";
import blog from "../assets/data/blog.js";

const Article = () => {
  const { id } = useParams();
  const article = blog.find((art) => art.id === parseInt(id));

  return (
    <div className="article">
      <header>
        <div className="logo-home">
          <Link to="../home">
            <p>
              {`<<`} Back to<span> Car Rental</span>
            </p>
          </Link>
        </div>

        <div className="book-car">
          <button>
            Book a car{" "}
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </header>

      <article>
        <div>
          <h1>{article.title1}</h1>
          <div className="article-image">
            <img src={article.image} alt=""></img>
          </div>
          <div>
          <h2>{article.title2}</h2>
          <p>{article.article2}</p>
          <p>{article.article2}</p>
          <h2>{article.title3}</h2>
          <p>{article.article3}</p>
          <p>{article.article3}</p>
          </div>
        </div>
      </article>

      <footer>
        <div className="logo-home">
          <Link to="../home" onClick={() => window.scrollTo(0,0)}>
            <img src={logo} alt=""></img>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Article;
