import "./Greeting.css";
import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Greeting = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  newTab
                  text="See my resume"
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="sitting on table"
              src={require("../../assets/images/greeting.gif")}
              width="100%"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
