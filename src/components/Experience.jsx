import React from "react";

function Experience() {
  return (
    <div className="card shadow-sm p-4">
      <h3 className="mb-3">Experience</h3>
      <ul className="timeline list-unstyled">
        <li className="mb-4">
          <h5>UI Developer – COA Network</h5>
          <small className="text-muted">2021 – 2023</small>
          <p>
            Worked on HireGuard and iTeleCenter projects using React, Angular, 
            and WordPress. Collaborated with the SEO and design team to deliver 
            responsive and SEO-friendly websites.
          </p>
        </li>
        <li>
          <h5>Freelance Developer</h5>
          <small className="text-muted">2019 – 2021</small>
          <p>
            Developed WordPress sites, customized themes, and built small web apps 
            for clients.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
