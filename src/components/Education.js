import React from "react";
import Fade from "react-reveal/Fade";
import Badge from "../parts/Badge";

export default function Education() {
  return (
    <Fade>
      <section id="experience" className="container py-5 my-5">
        <div className="row align-items-center mt-3">
          <div className="col-12 mx-sm-3 px-4">
            <h3 className="text-white font-weight-bolder mb-5">Educations</h3>
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-sm-12 col-md-3 mb-3 mb-md-0">
                  <h5 className="text-white mb-3">Bekasi, Indonesia</h5>
                  <h5 className="text-white">2017 - 2020</h5>
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="mb-3">
                    <h4 className="text-white font-weight-bold d-inline-block">
                      Rekayasa Perangkat Lunak -&nbsp;
                    </h4>
                    <h4 className="text-primary font-weight-bold d-inline-block">
                      SMK Negeri 1 Kota Bekasi
                    </h4>
                  </div>
                  <div className="mb-4">
                    <h5 className="text-white course-work">
                      <b>Relevant Coursework :</b> Database Management, Basic
                      Programming, Object Oriented Programming, Web Programming,
                      Software Modeling, Digital Simulation, Computer System,
                      Basic Computer Network, Basic Graphic Design;
                    </h5>
                  </div>
                  <Badge name="Software Engineering" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
