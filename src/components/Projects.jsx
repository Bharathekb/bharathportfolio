import React from "react";

function Projects() {
  return (
    <div>
      <h2 className="heading-2 fw-500 mb-4">Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card my-box my-border h-100">
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="para card-text">
                A personal portfolio website built with React and Bootstrap to showcase my skills and projects.
              </p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card my-box my-border h-100">
            <div className="card-body">
              <h5 className="card-title">Mitravan Chat App</h5>
              <p className="para card-text">
                A real-time chat app built with React and Firebase, featuring login, signup, and private chat functionality.
              </p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
