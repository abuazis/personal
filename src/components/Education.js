import React from "react";
import Fade from "react-reveal/Fade";
import Badge from "../parts/Badge";

export default function Education(props) {
  return (
    <Fade>
      <section id="experience" className="container py-5 my-5">
        <div className="row align-items-center mt-3">
          <div className="col-12 mx-sm-3 px-4">
            <h3 className="text-white font-weight-bolder mb-5">Educations</h3>
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-sm-12 col-md-3 mb-3 mb-md-0">
                  <h5 className="text-white mb-3">{props.data.place}</h5>
                  <h5 className="text-white">{props.data.year}</h5>
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="mb-3">
                    <h4 className="text-white font-weight-bold d-inline-block">
                      {props.data.major} -&nbsp;
                    </h4>
                    <h4 className="text-primary font-weight-bold d-inline-block">
                      {props.data.school}
                    </h4>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-white course-work">
                      <b>Relevant Coursework :</b> {props.data.course_work}
                    </h5>
                  </div>
                  <Badge name={props.data.badge} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
