import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Icon from "../parts/Icon";

export default function Navbar(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

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
                <li className={`nav-item${getNavLinkClass("#")}`}>
                  <a className="nav-link px-lg-4" href="#">
                    Home
                  </a>
                </li>
                <li className={`nav-item${getNavLinkClass("#experience")}`}>
                  <a className="nav-link px-lg-4" href="#experience">
                    Experiences
                  </a>
                </li>
                <li className={`nav-item${getNavLinkClass("#project")}`}>
                  <a className="nav-link px-lg-4" href="#project">
                    Projects
                  </a>
                </li>
                <li className={`nav-item${getNavLinkClass("#skill")}`}>
                  <a className="nav-link px-lg-4" href="#skill">
                    Skills
                  </a>
                </li>
                <li className={`nav-item${getNavLinkClass("#about")}`}>
                  <a className="nav-link pl-lg-4" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
