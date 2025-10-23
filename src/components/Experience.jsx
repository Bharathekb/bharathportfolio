import React from "react";

function Experience() {
  return (
    <div className="card my-box my-border p-4">
      <h2 className="heading-2 fw-500 mb-3">Experience</h2>
      <ul className="timeline list-unstyled my-list">
        <li className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="heading-4 fw-500">UI Developer – COA Network Pvt. Ltd., Hyderabad</h4>
            <small className="para text-muted">sep 2022 – Present</small>
          </div>
          <p className="para">
            Built and maintained user interfaces for web and mobile applications in collaboration with UX
            designers.
          </p>
          <p className="para">
            Developed responsive and accessible front-end components using HTML, CSS, JavaScript, Bootstrap,
            and React.
          </p>
          <p className="para">Collaborated with backend developers to ensure proper UI integrations and smooth functionality
            across all modules.
          </p>
          <p className="para">
            Contributed to improving UI functionality, reducing page load times, and enhancing SEO
            performance.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
