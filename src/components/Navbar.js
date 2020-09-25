import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import Icon from "../parts/Icon";
import SwitchTheme from "../parts/SwitchTheme";

export default function Navbar() {
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container py-3">
          <nav className="nav navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              <Icon />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} size="lg" color="white" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto py-4 py-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link px-lg-4"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-lg-4"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Experiences
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-lg-4"
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-lg-4"
                    activeClass="active"
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1000}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link px-lg-4"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1300}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <SwitchTheme />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
