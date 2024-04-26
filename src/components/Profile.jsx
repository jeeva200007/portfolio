import React from "react";
import "./Profile.css";
import ProfImg from "../assets/file.png";
import ghIcon from "../assets/github.1024x1024.png";
import linIcon from "../assets/lin.png";
import downloadIcon from "../assets/downIcon.jpg";

const Profile = () => {
  return (
    <div className="main-profile">
      <h1>Profile</h1>
      <div className="profile">
        <div className="position-name">
          <h3>Hello I'm</h3>
          <h1>Jeeva A</h1>
          <h2>Full Stack Developer</h2>
          <div className="social-profile">
            <a href="https://www.linkedin.com/in/jeevaarumugam07/">
              <img src={linIcon} alt="" />
            </a>
            <a href="https://github.com/jeeva200007">
              <img src={ghIcon} alt="" />
            </a>
            <a href="https://drive.google.com/file/d/1MlOa4QUiJE4V25DQjRLLrNetQG8mZkCm/view?usp=drive_link">
              <img src={downloadIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={ProfImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
