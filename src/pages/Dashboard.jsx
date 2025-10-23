import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import AdditonalInformation from "../components/AdditonalInformation";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Languages from "../components/Languages";

function Dashboard() {
  return (
    <div className="Right-container d-flex flex-column">
       <Header />
      <section id="about" className="my-section"><About /></section>
       <section id="skills" className="my-section"><Skills /></section>
        <section id="experience" className="my-section"><Experience /></section>
      <section id="projects" className="my-section"><Projects /></section>
       <section id="education" className="my-section"><Education /></section>
        <section id="education" className="my-section"><Languages /></section>
      {/* <section id="resume" className=""><Resume /></section> */}
      <section id="contact" className="my-section"><Contact /></section>
       <section id="contact" className="my-section"><AdditonalInformation /></section>
    </div>
  );
}

export default Dashboard;
