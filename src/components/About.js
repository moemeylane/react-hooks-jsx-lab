import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I'm doing the jsx lab</p>
  <img src={image} alt="I made This"></img>
  </div>;
}

export default About;
