import React from "react";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  return (
    <Fade>
      <section id="hero" className="container py-5 my-5">
        <div className="row align-items-center py-md-5 my-lg-3 py-sm-4">
          <div className="col-auto mx-sm-3 px-4">
            <h2 className="text-white hi-text mb-4">Hi, こんにちは!</h2>
            <div className="mb-4">
              <h1 className="text-white font-weight-bolder name-text d-inline mb-4">
                My name is&nbsp;
              </h1>
              <h1 className="text-primary font-weight-bolder name-text d-inline mb-4">
                {props.data.full_name}
              </h1>
            </div>
            <div>
              <h4 className="text-white describe-text d-inline">I'm a&nbsp;</h4>
              <h4 className="text-primary describe-text d-inline">
                {props.data.role}&nbsp;
              </h4>
              <h4 className="text-white describe-text d-inline">
                who focused on&nbsp;
              </h4>
              <h4 className="text-primary describe-text d-inline">
                {props.data.stack}&nbsp;
              </h4>
              <h4 className="text-white describe-text d-inline">using&nbsp;</h4>
              <a href={props.data.tech_link} target="_blank">
                <u className="text-white">
                  <h4 className="text-white text-underline describe-text d-inline">
                    {props.data.tech}
                  </h4>
                </u>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
