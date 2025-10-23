import React from "react";

function Projects() {
  const projectsData = [
    {
      title: "CallMantra",
      description: [
        "Cloud-based calling and texting tool for recruiters.",
        "Designed and built pixel-perfect pages using HTML5, CSS3, Bootstrap 5, and Jquery.",
      ],
      link: "https://www.callmantra.co/",
    },
    {
      title: "HireGuard",
      description: [
        "Platform to detect and prevent backdoor hiring practices.",
        "Developed interactive and responsive UI using Angular and Bootstrap 5.",
        "Collaborated with .NET backend team to integrate functionalities ",
      ],
      link: "https://www.hireguard.co/",
    },
    {
      title: "iTeleCenter",
      description: [
        "Contributed to redesign promosite and UI for backoffice",
        "Streamlined workflows and improved interactivity using Bootstrap and JavaScript",
      ],
      link: "https://www.itelecenter.com/",
    },
     {
      title: "ExpertMarketing",
      description: [
        "A sales and marketing tool for lead generation and client acquisition ",
        "Used Kendo UI and bootstrap for the front-end, integrated with .NET backend. ",
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

        {/* 👇 Show this footer only if project.link exists */}
        {project.link && (
          <div className="Card-footer p-3 pt-0">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn my-btn btn-orange-bg mx-auto py-2 px-3 mt-3"
            >
              View Project
            </a>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Projects;
