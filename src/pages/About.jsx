import React from "react";
import "../styles/about.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import img01 from "../assets/images/about/img-01.png";
import img02 from "../assets/images/about/img-02.png";

const LoremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div>
          <Flip right>
            <img src={img02} alt=""></img>
          </Flip>
        </div>
        <div>
          <div className="about-content-top-left">
            <h2>Lorem ipsum</h2>
            <div>
              {LoremIpsum.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <Fade right>
            <img src={img01} alt=""></img>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
