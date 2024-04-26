import React from "react";
import HtmlLogo from "../assets/HTML.png";
import CssLogo from "../assets/Css.png";
import JsLogo from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/redux.png";
import NodeLogo from "../assets/node.png";
import ExpressLogo from "../assets/express.png";
import MdbLogo from "../assets/Mdb.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-section">
      <h1>Skills</h1>
      <div className="tech-skills">
        <img src={HtmlLogo} alt="" />
        <img src={CssLogo} alt="" />
        <img src={JsLogo} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={ReduxLogo} alt="" />
        <img src={NodeLogo} alt="" />
        <img src={ExpressLogo} alt="" />
        <img src={MdbLogo} alt="" />
      </div>
    </div>
  );
};

export default Skills;
