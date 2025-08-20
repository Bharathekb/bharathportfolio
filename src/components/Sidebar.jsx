import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
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
      <div className="d-md-none bg-dark text-white p-2 d-flex justify-content-between align-items-center">
        <h4 className="m-0">My Portfolio</h4>
        <button className="btn btn-outline-light" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar for Desktop / Drawer for Mobile */}
      <div
        className={`bg-dark text-white p-3 sidebar 
          ${isOpen ? "d-block" : "d-none"} d-md-flex flex-md-column`}
        style={{
          minHeight: "100vh",
          width: "250px",
          position: isOpen ? "absolute" : "static",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <h2 className="mb-4 d-none d-md-block">My Portfolio</h2>
        <nav className="nav flex-column">
          <a href="#about" className="nav-link text-white" onClick={(e) => handleScroll(e, "about")}>About</a>
          <a href="#projects" className="nav-link text-white" onClick={(e) => handleScroll(e, "projects")}>Projects</a>
          <a href="#skills" className="nav-link text-white" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
          <a href="#experience" className="nav-link text-white" onClick={(e) => handleScroll(e, "experience")}>Experience</a>
          <a href="#education" className="nav-link text-white" onClick={(e) => handleScroll(e, "education")}>Education</a>
          <a href="#testimonials" className="nav-link text-white" onClick={(e) => handleScroll(e, "testimonials")}>Testimonials</a>
          <a href="#resume" className="nav-link text-white" onClick={(e) => handleScroll(e, "resume")}>Resume</a>
          <a href="#contact" className="nav-link text-white" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
