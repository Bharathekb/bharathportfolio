import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Education from "../components/Education";

function Dashboard() {
  return (
    <div>
       <Header />
      <section id="about" className="mb-5"><About /></section>
      <section id="projects" className="mb-5"><Projects /></section>
      <section id="skills" className="mb-5"><Skills /></section>
      <section id="resume" className="mb-5"><Resume /></section>
      <section id="experience" className="mb-5"><Experience /></section>
      <section id="testimonials" className="mb-5"><Testimonials /></section>
        <section id="education" className="mb-5"><Education /></section>
      <section id="contact" className="mb-5"><Contact /></section>
    </div>
  );
}

export default Dashboard;
