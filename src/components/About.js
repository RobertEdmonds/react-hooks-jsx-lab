import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
      <h2>About Me</h2>
      <p>There seems to be a lot of errors getting to the right answer.</p>
      <img src={image} alt="I made this"/>
    </div>;
}

export default About;
