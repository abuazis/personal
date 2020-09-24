import React from "react";
import Badge from "../parts/Badge";
import Fade from "react-reveal/Fade";

export default function ExperiencePart(props) {
  return (
    <Fade>
      <div className="row mb-5 pb-3">
        <div className="col-sm-12 col-md-3 mb-3 mb-md-0">
          <h5 className="text-white mb-3">{props.place}</h5>
          <h5 className="text-white">{props.time}</h5>
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="mb-3">
            <h4 className="text-white font-weight-bold d-inline-block">
              {props.role} -&nbsp;
            </h4>
            <h4 className="text-primary font-weight-bold d-inline-block">
              {props.company}
            </h4>
          </div>
          <div className="mb-4">
            <h5 className="text-white course-work">
              <b>Task and Work :</b>
            </h5>
          </div>
          <div className="mb-4">
            <ul className="pl-4 ml-1">
              <li className="text-white task-exp">
                <h6 className="text-white task-exp">{props.taskFirst}</h6>
              </li>
              <li className="text-white task-exp">
                <h6 className="text-white task-exp">{props.taskSecond}</h6>
              </li>
              <li className="text-white task-exp">
                <h6 className="text-white task-exp">{props.taskThird}</h6>
              </li>
              <li className="text-white task-exp">
                <h6 className="text-white task-exp">{props.taskFourth}</h6>
              </li>
            </ul>
          </div>
          <Badge name={props.techFirst} />
          <Badge name={props.techSecond} />
          <Badge name={props.techThird} />
          <Badge name={props.techFourth} />
        </div>
      </div>
    </Fade>
  );
}
