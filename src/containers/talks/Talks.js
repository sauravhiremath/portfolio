import "./Talks.css";
import React, { useContext } from "react";
import { Fade } from "react-reveal";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const Talks = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          <div className="talk-main-div">
            <div className="blog-text-div">
              {talkSection.talks.map((talk) => {
                return (
                  <TalkCard
                    key={talk.title}
                    talkDetails={{
                      title: talk.title,
                      subtitle: talk.subtitle,
                      slides_url: talk.slides_url,
                      event_url: talk.event_url,
                      image: talk.image,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Talks;
