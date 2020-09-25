import React from "react";
import Fade from "react-reveal/Fade";

export default function Skill(props) {
  return (
    <section id="skill" className="container pb-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4">
          <h3 className="text-white font-weight-bolder mb-5">Skills</h3>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Strong</h4>
                {props.data.strong.map((item) => {
                  return <h6 className="text-white ml-2 mb-3">{item.name}</h6>;
                })}
              </div>
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">
                  Experienced
                </h4>
                {props.data.experienced.map((item) => {
                  return <h6 className="text-white ml-2 mb-3">{item.name}</h6>;
                })}
              </div>
              <div className="col-sm-4 col-12 mb-4 mb-sm-0">
                <h4 className="text-primary font-weight-bold mb-4">Familiar</h4>
                {props.data.familiar.map((item) => {
                  return <h6 className="text-white ml-2 mb-3">{item.name}</h6>;
                })}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
