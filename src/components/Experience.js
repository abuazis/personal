import React from "react";
import ExperiencePart from "../parts/ExperiencePart";

export default function Experience() {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4">
          <h3 className="text-white font-weight-bolder mb-5">Experiences</h3>
          <div className="container-fluid px-0">
            <ExperiencePart
              place="Jakarta, Indonesia"
              time="December 2018 - April 2019"
              role="Web Developer Intern"
              company="Diginova Kreasi Indonesia"
              taskFirst="Create a business model canvas project"
              taskSecond="Create ui design for website application"
              taskThird="Implement ui design to responsive front-end view"
              taskFourth="Integrate front-end view to back-end using codeigniter"
              techFirst="Adobe XD"
              techSecond="Bootstrap CSS"
              techThird="PHP"
              techFourth="Codeigniter"
            />
            <ExperiencePart
              place="Jakarta, Indonesia"
              time="July 2020 - August 2020"
              role="Mobile Developer Freelance (Full-Stack)"
              company="Fudamiku Restaurant"
              taskFirst="Create back-end api using laravel framework"
              taskSecond="Implement ui design to flutter project"
              taskThird="Integrate payment gateway midtrans"
              taskFourth="Publish app release to play store"
              techFirst="Laravel"
              techSecond="Dart"
              techThird="Flutter"
              techFourth="Midtrans"
            />
            <ExperiencePart
              place="Bekasi, Indonesia"
              time="September 2020"
              role="Mobile Developer Freelance"
              company="Flutter Indonesia"
              taskFirst="Create ui design using figma"
              taskSecond="Implement ui design to flutter project"
              taskThird="Integrate back-end using firebase service"
              taskFourth="Publish app release to play store"
              techFirst="Figma"
              techSecond="Firebase"
              techThird="Flutter"
              techFourth="One Signal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
