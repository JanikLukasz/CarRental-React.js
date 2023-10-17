import React from "react";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../styles/home.css";

import car1 from "../assets/images/home/car-1.jpg";
import car3 from "../assets/images/home/car-2.jpg";
import car2 from "../assets/images/home/car-3.jpg";
import manager from "../assets/images/home/manager.png";
import managerCar from "../assets/images/home/manager-car.png";
import saveArticles from "../assets/data/saveArticles";

const imageArray = [car1, car2, car3];

const Home = () => {
  // ================== home-content-1 ============= //
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImage = {
    backgroundImage: `url(${imageArray[currentIndex]})`,
    transition: "0.8s",
  };

  // ================== home-content-2 ============= //
  const loremIpsum1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum ornare risus, eget scelerisque quam posuere quis. Donec a est lacus. Aenean vel pellentesque dolor. Quisque et feugiat dolor.";
  const googleIcons = [
    "support_agent",
    "directions_car",
    "payments",
    "loyalty",
    "commute",
    "credit_card",
  ];

  // ================== home-content-5 ============= //
  const benefitIcons = [
    { euro: "Quality cars at low price" },
    { nest_clock_farsight_analog: "Unlimited KM from selected locations" },
    {
      construction:
        "All Thrifty vehicles are covered with national roadside assistance.",
    },
  ];

  return (
    <div className="home">
      <div className="home-content-1" style={backgroundImage}>
        <div>
          <h1>
            Discover your{" "}
            <span style={{ color: `rgb(255, 204, 0)` }}>ideal</span> car
          </h1>
          <p>
            Celebrate our extensive selection of 24 distinct vehicles, each one
            a masterpiece in its own right.
          </p>
        </div>
      </div>

      <div className="home-content-2">
        {googleIcons.map((icon, index) => (
          <Fade top key={index}>
            <div>
              <span className="material-symbols-outlined">{icon}</span>
              <p>{loremIpsum1}</p>
            </div>
          </Fade>
        ))}
      </div>

      <div className="home-content-3">
        <h1>Cruise into Savings: Car Rental Specials</h1>

        <div className="save-carts">
          {saveArticles.map((art, index) => (
            <Fade top key={index}>
              <Link to={`../save/${art.id}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="save-cart">
                  <img src={art.image} alt=""></img>
                  <p>{loremIpsum1}</p>
                  <button>SAVE</button>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>

      <div className="home-content-4">
        <div>
          <h1>Save 15% When You Join Car Rental</h1>
          <p>
            Save on every rental, get priority counter service and adventure
            more
          </p>
          <div className="join-button">
            <button>Join for FREE</button>
          </div>
        </div>
      </div>

      <div className="home-content-5">
        <h1>Benefits</h1>
        <div className="benefit-carts">
          {benefitIcons.map((icon, index) => (
            <Fade top key={index}>
              <div>
                <span className="material-symbols-outlined">
                  {Object.keys(icon)}
                </span>
                <p>{Object.values(icon)}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <div className="home-content-6">
        <div className="home-content-6-images">
          <img src={manager} alt=""></img>
          <img src={managerCar} alt=""></img>
        </div>
        <div>
          <p>
            Lorem Ipsum aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
