import React from "react";
import Fade from "react-reveal/Fade";
import Badge from "../parts/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Portfolio1 from "../assets/images/portfolio-1.png";
import Portfolio2 from "../assets/images/portfolio-2.png";
import Portfolio3 from "../assets/images/portfolio-3.png";
import Portfolio4 from "../assets/images/portfolio-4.png";
import Portfolio5 from "../assets/images/portfolio-5.png";
import Portfolio6 from "../assets/images/portfolio-6.png";
import Portfolio7 from "../assets/images/portfolio-7.png";
import Portfolio8 from "../assets/images/portfolio-8.png";
import Portfolio9 from "../assets/images/portfolio-9.png";
import Portfolio10 from "../assets/images/portfolio-10.png";
import GooglePlay from "../assets/images/google-play-badge.png";

export default function Project() {
  return (
    <section id="project" className="container pb-5 mb-5">
      <div className="row align-items-center mt-3">
        <div className="col-12 mx-sm-3 px-4">
          <h3 className="text-white font-weight-bolder mb-5">Projects</h3>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio1} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Abuza App
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Abuza App is a Simple UI Application that displays a list of
                  food menus and specific types of food from any restaurant.
                  This application also displays a feature to checkout food and
                  earn points after ordering certain foods.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Dart" />
                  <Badge name="Flutter" />
                </div>
                <div className="ml-lg-3">
                  <a href="#">
                    <img src={GooglePlay} className="mr-2" width="150" />
                  </a>
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio2} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Flutix
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Flutix is ​​a mobile application made to help people to buy
                  tickets online via their cellphone. Flutix uses data
                  collection methods to display the currently airing movie
                  matches genre chosen by the user.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Dart" />
                  <Badge name="Flutter" />
                  <Badge name="Firebase" />
                  <Badge name="MovieDB API" />
                </div>
                <div className="ml-lg-3">
                  <a href="#">
                    <img src={GooglePlay} className="mr-2" width="150" />
                  </a>
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio3} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Fudamiku
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Fudamiku is mobile application used to make an order remotely
                  at Fudamiku restaurant Jakarta. This application is made using
                  Flutter Framework and Laravel API Back-End and integrated with
                  midtrans payment gateway.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Dart" />
                  <Badge name="Flutter" />
                  <Badge name="Laravel" />
                  <Badge name="Midtrans" />
                  <Badge name="One Signal" />
                </div>
                <div className="ml-lg-3">
                  <a href="#">
                    <img src={GooglePlay} className="mr-2" width="150" />
                  </a>
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio4} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  GoAbsensi
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  GoAbsensi is presence application used by students / employees
                  to perform daily attendance digitally. There are several
                  security measures that strengthen data accuracy so that users
                  cannot commit fraudulent acts.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Dart" />
                  <Badge name="Flutter" />
                  <Badge name="Firebase" />
                  <Badge name="One Signal" />
                </div>
                <div className="ml-lg-3">
                  <a href="#">
                    <img src={GooglePlay} className="mr-2" width="150" />
                  </a>
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio5} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  PS5 Store
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  PS5 Store is simple UI app used to make sales PlayStation 5
                  products such as Stick Controller, Mice, and Video Games. This
                  project only provides a user interface design transformed into
                  an application using Flutter Framework.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Dart" />
                  <Badge name="Flutter" />
                </div>
                <div className="ml-lg-3">
                  <a href="#">
                    <img src={GooglePlay} className="mr-2" width="150" />
                  </a>
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio6} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Digital Raport
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Digital Raport is website application used by school teachers
                  and student's parent to do the evaluation distribution online
                  learning outcomes through this website without face to face
                  meeting.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Bootstrap CSS" />
                  <Badge name="PHP" />
                  <Badge name="Codeigniter" />
                </div>
                <div className="ml-lg-4">
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio7} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Hujjah Store
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Hujjah Store is online shop website sells a wide variety of
                  books. As our buyers can make book purchases by manual
                  transfer method. We provide admin panel to manage book
                  product.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Bootstrap CSS" />
                  <Badge name="PHP" />
                  <Badge name="Laravel" />
                </div>
                <div className="ml-lg-4">
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio8} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Multiplaza
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Multiplaza is e-commerce website application using the
                  marketplace system. Which is where the seller can open stalls
                  on this website for sell their products to buyers on this
                  website too.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Bootstrap CSS" />
                  <Badge name="PHP" />
                  <Badge name="Codeigniter" />
                  <Badge name="Google Maps API" />
                </div>
                <div className="ml-lg-4">
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio9} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Resto Serve
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Resto Serve is restaurant service website made to easing
                  restaurant employees in handling food orders directly use the
                  queuing system integrated between employees. And also
                  monitoring daily selling data chart.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Bootstrap CSS" />
                  <Badge name="PHP" />
                  <Badge name="Laravel" />
                  <Badge name="Chart JS" />
                </div>
                <div className="ml-lg-4">
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="row mb-5 pb-3">
              <div className="col-12 col-lg-6">
                <img src={Portfolio10} className="rounded w-100" />
              </div>
              <div className="col-12 col-lg-6 pt-lg-0 mt-lg-0 mt-4 pt-3">
                <h3 className="text-primary font-weight-bolder ml-lg-4">
                  Abu Aziz Personal Portfolio
                </h3>
                <h5 className="text-white ml-lg-4 desc-project">
                  Abu Aziz Personal Portfolio Website is made to show off my
                  portfolio project that have been worked. Fully built using
                  React JS and designed to be responsive. Side weekend project
                  to try out several new framewrok and techstacks.{" "}
                </h5>
                <div className="ml-lg-4">
                  <Badge name="Javascript" />
                  <Badge name="React JS" />
                </div>
                <div className="ml-lg-4">
                  <a href="#" className="btn btn-github text-decoration-none">
                    Source Code{" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
