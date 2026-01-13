import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "iTeleCenter / CallMantra",
      description: [
        "Cloud-based calling and texting platform for recruiters.",
        "Developed and maintained responsive user interfaces using React.js, HTML5, CSS3, Bootstrap 5, and JavaScript.",
        "Built reusable UI components and integrated REST APIs for dynamic data rendering.",
      ],
    },
    {
      title: "HireGuard",
      description: [
        "Platform to detect and prevent backdoor hiring practices.",
        "Developed interactive and responsive UI using Angular and Bootstrap 5.",
        "Collaborated with .NET backend team to integrate functionalities.",
      ],
    },
    {
      title: "iTeleCenter",
      description: [
        "Contributed to redesign of promotional site and UI for backoffice.",
        "Streamlined workflows and improved interactivity using Bootstrap and JavaScript.",
      ],
    },
    {
      title: "ExpertMarketing",
      description: [
        "Internal application used by the marketing team for product marketing and lead generation.",
        "Used Kendo UI and Bootstrap for frontend development, integrated with a .NET backend.",
      ],
    },
  ];

  return (
    <div>
      <h2 className="heading-2 fw-500">Projects</h2>
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card my-box my-border h-100">
              <div className="Card-header p-3 pb-0">
                <h4 className="heading-4 fw-500 mb-0">{project.title}</h4>
              </div>

              <div className="card-body px-3">
                <div className="para-box card-text">
                  {project.description.map((para, i) => (
                    <p className="para" key={i}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer intentionally removed – internal projects */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
