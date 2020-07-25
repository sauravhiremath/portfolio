import React, { useContext } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";
import "./twitter.css";

const renderLoader = () => <Loading />;
export default function Twitter() {
  const { isDark } = useContext(StyleContext);
  if (twitterDetails.userName) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="blogs">
          <div className="tw-header">
            <h1 className="tw-header-text">{twitterDetails.title}</h1>
            <p className={isDark ? "dark-mode tw-subtitle":"subTitle tw-subtitle"}>{twitterDetails.subtitle}</p>
          </div>
          <div className="twitter-main">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{ height: 700 }}
              placeholder={renderLoader()}
              key={isDark ? "1" : "2"}
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
}
