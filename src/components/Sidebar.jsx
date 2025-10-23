import React, { useState,useEffect } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]); // runs whenever isOpen changes

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};

 const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // auto-close sidebar on mobile after click
    }
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="My-header d-lg-none bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
        <h4 className="m-0"><img className="Logo img-fluid" src="/images/My-logo-white.png" /></h4>
        <button className="btn btn-outline-light" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar for Desktop / Drawer for Mobile */}
      <div
        className={`text-white p-3 sidebar 
          ${isOpen ? "d-flex align-items-start justify-content-between" : "d-none"} d-lg-flex flex-lg-column`}
        style={{
          position: isOpen ? "absolute" : "static",
        }}
      >
        <h2 className="mb-4 d-none d-lg-block">
          <img className="Logo img-fluid" src="/images/My-logo-white.png" />
          </h2>
        <nav className="nav flex-column BC-nav">
          <a href="#about" className="nav-link text-white" onClick={(e) => handleScroll(e, "about")}>
            <img src="/images/about-icon.svg" /> 
            About
            </a>
             <a href="#skills" className="nav-link text-white" onClick={(e) => handleScroll(e, "skills")}>
            <img src="/images/skills-icon.svg" />
            Skills
            </a>
             <a href="#experience" className="nav-link text-white" onClick={(e) => handleScroll(e, "experience")}>
            <img src="/images/exp-icon.svg" /> Experience
            </a>
          <a href="#projects" className="nav-link text-white" onClick={(e) => handleScroll(e, "projects")}>
            <img src="/images/projects-icon.svg" />
            Projects</a>
          <a href="#education" className="nav-link text-white" onClick={(e) => handleScroll(e, "education")}>
            <img src="/images/education-icon.svg" />
            Education
            </a>
          <a href="#resume" className="nav-link text-white d-none" onClick={(e) => handleScroll(e, "resume")}>Resume</a>
          <a href="#contact" className="nav-link text-white" onClick={(e) => handleScroll(e, "contact")}>
            <img src="/images/contact-icon.svg" />
            Contact</a>
        </nav>
        <button className="Close btn p-0 m-0 d-md-none" onClick={toggleSidebar}><img src="/images/close.svg" alt="close" /></button>
      </div>
    </>
  );
}

export default Sidebar;
