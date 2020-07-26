import "./twitter.css";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;

const Twitter = () => {
  const { isDark } = useContext(StyleContext);
  if (twitterDetails.userName) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="blogs">
          <div className="tw-header">
            <h1 className="tw-header-text">{twitterDetails.title}</h1>
            <p
              className={
                isDark ? "dark-mode tw-subtitle" : "subTitle tw-subtitle"
              }
            >
              {twitterDetails.subtitle}
            </p>
          </div>
          <div className="twitter-main">
            <TwitterTimelineEmbed
              key={isDark ? "1" : "2"}
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 700 }}
              placeholder={renderLoader()}
              theme={isDark ? "dark" : "light"}
              noScrollbar={false}
              noFooter={false}
            />
          </div>
        </div>
      </Fade>
    );
  } else {
    return null;
  }
};

export default Twitter;
