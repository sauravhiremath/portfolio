import "./Header.css";
import React, { useContext } from "react";
import Headroom from "react-headroom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

const Header = () => {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          {exp === true && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#talks">Talks & Workshops</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <button type="submit">
              <ToggleSwitch />
            </button>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
