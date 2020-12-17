import React from "react";
import Fade from "react-reveal/Fade";
import Badge from "../parts/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import GooglePlay from "../assets/images/google-play-badge.png";

export default function Project(props) {
  return (
    <section id="project" className="container pb-5 mb-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4 mx-md-0 px-md-0 mx-xl-3 px-xl-4">
          <h3 className="text-white font-weight-bolder mb-5">Projects</h3>
          {props.data.map((item) => {
            return (
              <Fade>
                <div className="row mb-5 pb-3">
                  <div className="col-12 col-xl-6">
                    <a href="#">
                      <div className="w-100 position-relative">
                        <div className="w-100 eye-hover rounded position-relative">
                          <img src={item.image} className="rounded w-100" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-12 col-xl-6 pt-xl-0 mt-xl-0 mt-4 pt-3">
                    <h3 className="text-primary font-weight-bolder ml-xl-4">
                      {item.name}
                    </h3>
                    <h5 className="text-white ml-xl-4 desc-project">
                      {item.description}{" "}
                    </h5>
                    <div className="ml-xl-4">
                      {item.tech.map((item) => {
                        return <Badge name={item.name} />;
                      })}
                    </div>
                    <div className="ml-xl-3 ml-0">
                      {item.play_store_link != null ? (
                        <a href={item.play_store_link} target="_blank">
                          <img src={GooglePlay} className="mr-2" width="150" />
                        </a>
                      ) : (
                        <span></span>
                      )}
                      <a
                        href={item.github_link}
                        className="btn btn-github text-decoration-none ml-xl-2"
                        target="_blank"
                      >
                        Source Code{" "}
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="lg"
                          color="white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
