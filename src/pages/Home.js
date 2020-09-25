import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skill from "../components/Skill";
import About from "../components/About";
import Footer from "../components/Footer";

import profile from "../json/profile.json";
import experiences from "../json/experiences.json";
import projects from "../json/projects.json";
import skills from "../json/skills.json";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero data={profile.hero} />
        <Education data={profile.education} />
        <Experience data={experiences.expriences} />
        <Project data={projects.projects} />
        <Skill data={skills} />
        <About data={profile} />
        <Footer data={profile.social_media} />
      </>
    );
  }
}
