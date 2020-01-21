import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-name">
        <small>
          made with{" "}
          <FontAwesomeIcon
            style={{ marginRight: "0.7rem" }}
            icon="heart"
            size="1x"
            color="red"
          />
          by cmcWebCode
        </small>
      </div>
      <div className="footer-socials">
        <a href="www.notin.com" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} color="white" size="3x" />
        </a>
        <a href="www.notin.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} color="white" size="3x" />
        </a>
        <a href="www.notin.com" color="white" className="instagram social">
          <FontAwesomeIcon color="white" icon={faGithub} size="3x" />
        </a>
        <a href="www.notin.com" color="white" className="instagram social">
          <FontAwesomeIcon icon={faLinkedin} color="white" size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
