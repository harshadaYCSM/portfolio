import React, { useState } from "react";
import Type from './Type';
import '../styles/Intro.css';

const Intro = () => {


    return (
        <div className="intro">
          <p className="introduction">Hi there, I am Harshada Chaudhari 
          <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
          </p>
          <Type />
          <div className="banner-image">
            <img src="coder.png"></img>
          </div>
        </div>
      );
}

export default Intro;