import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skill from "../components/Skill";
import About from "../components/About";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Navbar {...this.props} />
        <Hero />
        <Education />
        <Experience />
        <Project />
        <Skill />
        <About />
        <Footer />
      </>
    );
  }
}
