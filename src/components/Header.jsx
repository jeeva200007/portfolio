import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="containers">
      <div className="name">
        <h2>Jeeva Arumugam</h2>
      </div>
      <div className="other-info">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
