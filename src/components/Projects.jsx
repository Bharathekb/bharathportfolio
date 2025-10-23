import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Bootstrap to showcase my skills and projects.",
      link: "#",
    },
    {
      title: "Mitravan Chat App",
      description:
        "A real-time chat app built with React and Firebase, featuring login, signup, and private chat functionality.",
      link: "#",
    },
  ];

  return (
    <div>
      <h2 className="heading-2 fw-500">Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card my-box my-border h-100">
              <div className="card-body">
                <h4 className="heading-4 fw-500">{project.title}</h4>
                <p className="para card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
