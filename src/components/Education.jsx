import React from "react";

function Education() {
  return (
   <div className="card my-box my-border p-4">
      <h2 className="heading-2 fw-500 mb-3">Experience</h2>
      <ul className="timeline list-unstyled">
        <li className="mb-4">
          <div className="d-flex justify-content-between">
            <h4 className="heading-4 fw-500">UI Developer – COA Network</h4>
            <small className="para text-muted">2021 – 2023</small>
          </div>
          <p className="para">
            Worked on HireGuard and iTeleCenter projects using React, Angular,
            and WordPress. Collaborated with the SEO and design team to deliver
            responsive and SEO-friendly websites.
          </p>
        </li>
        <li>
          <div className="d-flex justify-content-between">
         <h4 className="heading-4 fw-500">Freelance Developer</h4>
          <small className="para text-muted">2019 – 2021</small>
          </div>
          <p>
            Developed WordPress sites, customized themes, and built small web apps
            for clients.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
