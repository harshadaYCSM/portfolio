import React from "react";
import Typewriter from "typewriter-effect";
import { typewriterTextStrings } from '../assets/info';

function TextTypewriter() {

  return (

    <Typewriter
      options={{
        strings: typewriterTextStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TextTypewriter;
