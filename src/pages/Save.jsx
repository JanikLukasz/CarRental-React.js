import React from "react";
import "../styles/save.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useParams } from "react-router-dom";
import saveArticles from "../assets/data/saveArticles";

const Save = () => {
  const { id } = useParams();
  const article = saveArticles.find((art) => art.id === parseInt(id));

  return (
    <div className="save">
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

      <div className="saveArt-middle-content">
        <article>
          <div className="saveArt-image">
            <img src={article.image} alt=""></img>
          </div>
          <div className="saveArt-text">
            <h2>{article.title}</h2>
            <p>{article.text1}</p>
            <h3>{article.title}</h3>
            <p>{article.text2}</p>
            <p>{article.text1}</p>
          </div>
        </article>

        <div className="save-articles">
          {saveArticles.map((art, index) => (
            <Link to={`../save/${art.id}`}>
              <div className="save-cart">
                <div>
                  <img src={art.image} alt=""></img>
                </div>
                <p>{art.text2}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer>
        <div className="logo-home">
          <Link to="../home" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt=""></img>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Save;
