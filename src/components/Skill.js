import React from "react";
import Fade from "react-reveal/Fade";

export default function Skill() {
  return (
    <section id="skill" className="container pb-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4">
          <h3 className="text-white font-weight-bolder mb-5">Skills</h3>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Strong</h4>
                <h6 className="text-white ml-2 mb-3">PHP</h6>
                <h6 className="text-white ml-2 mb-3">Javascript</h6>
                <h6 className="text-white ml-2 mb-3">Java</h6>
                <h6 className="text-white ml-2 mb-3">Dart</h6>
                <h6 className="text-white ml-2 mb-3">Flutter</h6>
                <h6 className="text-white ml-2 mb-3">Codeigniter</h6>
                <h6 className="text-white ml-2 mb-3">Laravel</h6>
                <h6 className="text-white ml-2 mb-3">React</h6>
              </div>
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">
                  Experienced
                </h4>
                <h6 className="text-white ml-2 mb-3">Node JS</h6>
                <h6 className="text-white ml-2 mb-3">Android</h6>
                <h6 className="text-white ml-2 mb-3">Git</h6>
                <h6 className="text-white ml-2 mb-3">Docker</h6>
                <h6 className="text-white ml-2 mb-3">Microservice</h6>
                <h6 className="text-white ml-2 mb-3">Firebase</h6>
                <h6 className="text-white ml-2 mb-3">Rest API</h6>
                <h6 className="text-white ml-2 mb-3">Linux</h6>
              </div>
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Familiar</h4>
                <h6 className="text-white ml-2 mb-3">Python</h6>
                <h6 className="text-white ml-2 mb-3">C++</h6>
                <h6 className="text-white ml-2 mb-3">TensorFlow</h6>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
