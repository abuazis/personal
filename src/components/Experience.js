import React from "react";
import ExperiencePart from "../parts/ExperiencePart";

export default function Experience(props) {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4">
          <h3 className="text-white font-weight-bolder mb-5">Experiences</h3>
          <div className="container-fluid px-0">
            {props.data.map((item) => {
              return (
                <ExperiencePart
                  place={item.place}
                  time={item.time}
                  role={item.role}
                  company={item.company}
                  taskFirst={item.task_1}
                  taskSecond={item.task_2}
                  taskThird={item.task_3}
                  taskFourth={item.task_4}
                  techFirst={item.tech_1}
                  techSecond={item.tech_2}
                  techThird={item.tech_3}
                  techFourth={item.tech_4}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
