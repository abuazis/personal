import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function About(props) {
  return (
    <Fade>
      <section id="about" className="container pb-5 mb-5">
        <div className="row align-items-center mt-3">
          <div className="col-12 mx-sm-3 px-4">
            <h3 className="text-white font-weight-bolder mb-5">About</h3>
            <div className="row mb-5 pb-3">
              <div className="col-md-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">
                  Biography
                </h4>
                <h6 className="text-white d-inline-block">
                  I'm a Programmer who is interested&nbsp;
                </h6>
                <h6 className="text-primary d-inline-block">
                  {props.data.biography.stack}.
                </h6>
                <h6 className="text-white d-inline-block biography font-weight-normal">
                  {props.data.biography.body}
                </h6>
              </div>
              <div className="col-md-1 col-12"></div>
              <div className="col-md-3 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Interest</h4>
                {props.data.interest.map((item) => {
                  return <h6 className="text-white ml-1 mb-3">{item.name}</h6>;
                })}
              </div>
              <div className="col-md-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Contact</h4>
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="mr-4"
                    size="md"
                    color="white"
                  />
                  <h6 className="text-white d-inline-block">
                    {props.data.contact.telephone}
                  </h6>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="mr-4"
                    size="md"
                    color="white"
                  />
                  <h6 className="text-white d-inline-block">
                    {props.data.contact.whatsapp}
                  </h6>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-4"
                    size="md"
                    color="white"
                  />
                  <h6 className="text-white d-inline-block">
                    {props.data.contact.email}
                  </h6>
                </div>
                <div className="mb-3">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="mr-4"
                    size="md"
                    color="white"
                  />
                  <h6 className="text-white d-inline-block">
                    {props.data.contact.discord}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
