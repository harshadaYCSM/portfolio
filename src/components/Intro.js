import React from "react";
import TextTypewriter from './TextTypewriter';
import CoderImage from '../assets/coder.png'
import '../styles/Intro.css';

const Intro = () => {


  return (
    <div className="intro">
      <div className="text-container">
        <p className="introduction">Hi there, I am Harshada Chaudhari
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </p>
        <TextTypewriter />
        <div className="keywords">
          #JavaScript #HTML #CSS #ReactJS
        </div>
      </div>
      <div className="banner-image">
        <img className="coder-image" src={CoderImage} alt="coder"></img>
      </div>
    </div>
  );
}

export default Intro;