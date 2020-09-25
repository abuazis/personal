import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <Fade>
      <section id="about" className="container mb-5">
        <div className="row align-items-center mt-4">
          <div className="col-12 mb-5 text-center">
            <a href={props.data.linked_in} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mx-4"
                size="2x"
                color="white"
              />
            </a>
            <a href={props.data.github} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="mx-4"
                size="2x"
                color="white"
              />
            </a>
            <a href={props.data.instagram} target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="mx-4"
                size="2x"
                color="white"
              />
            </a>
            <a href={props.data.google_developer} target="_blank">
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="mx-4"
                size="2x"
                color="white"
              />
            </a>
          </div>
          <div className="col-12">
            <h5 className="text-white text-center">Abu Toyib Al Aziz © 2020</h5>
          </div>
        </div>
      </section>
    </Fade>
  );
}
