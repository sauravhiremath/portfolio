import "./SocialMedia.css";
import React from "react";
import { socialMediaLinks } from "../../portfolio";

export default socialMedia = () => {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.gitlab ? (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
          <span />
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
          <span />
        </a>
      ) : null}
    </div>
  );
};
