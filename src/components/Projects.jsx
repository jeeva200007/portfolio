import React from "react";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="project-items">
        <div className="project-1">
          <img src={Img1} alt="" />
          <h3>
            My-Blog - Blog Application
            <a href="https://blog-app-7yzd.onrender.com/">[link]</a>
          </h3>
          <p>
            Please wait for 20-30sec to load the backend server. This is a blog
            application made on React, Node, Express and MongoDb
          </p>
        </div>
        <div className="project-2">
          <img src={Img2} alt="" />
          <h3>
            Flixxit - OTT Application
            <a href="https://flixxit-app-6fd9a.web.app/">[link]</a>
          </h3>
          <p>OTT frontend application built using React </p>
        </div>
        <div className="project-3">
          <img src={Img3} alt="" />
          <h3>
            Weather - Application
            <a href="https://overcastapp.netlify.app/">[link]</a>
          </h3>
          <p>A simple frontend weather application made on React </p>
        </div>
        <div className="project-4">
          <img src={Img4} alt="" />
          <h3>
            ToDo - List
            <a href="https://sparkly-blancmange-649252.netlify.app/">[link]</a>
          </h3>
          <p>A Todo list application made on React</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
