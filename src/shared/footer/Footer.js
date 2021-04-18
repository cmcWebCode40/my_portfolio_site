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
        <a
          href="https://web.facebook.com/chinweikemichael.chinonso"
          className="facebook social"
          target="_blanck"
        >
          <FontAwesomeIcon icon={faFacebook} color="white" size="3x" />
        </a>
        <a
          href="https://twitter.com/cmcWebCode"
          className="twitter social"
          target="_blanck"
        >
          <FontAwesomeIcon icon={faTwitter} color="white" size="3x" />
        </a>
        <a
          href="https://github.com/cmcWebCode40"
          color="white"
          className="instagram social"
          target="_blanck"
        >
          <FontAwesomeIcon color="white" icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/chinweike-michael-chinonso-467360a8/"
          color="white"
          className="instagram social"
          target="_blanck"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" size="3x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
