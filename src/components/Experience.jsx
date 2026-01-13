import React from "react";

function Experience() {
  return (
    <div className="card my-box my-border p-4">
      <h2 className="heading-2 fw-500 mb-3">Experience</h2>
      <ul className="timeline list-unstyled my-list mb-0">
        <li className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="heading-4 fw-500">Front end Developer – COA Network Pvt. Ltd., Hyderabad</h4>
            <small className="para text-muted">sep 2022 – Present</small>
          </div>
          <p className="para">
          Built and maintained user interfaces for web and mobile applications using React.js, collaborating closely with UX designers to deliver intuitive and user-friendly experiences.
          </p>
          <p className="para">
          Developed responsive, accessible, and reusable front-end components using HTML, CSS, JavaScript (ES6+), Bootstrap, and React.js.
          </p>
          <p className="para">Implemented React Hooks (useState, useEffect) and component-based architecture to manage application state and improve UI performance.
          </p>
          <p className="para">
            Contributed to improving UI functionality, reducing page load times, and enhancing SEO
            performance.
          </p>
          <p className="para">
            Integrated REST APIs with React applications, working alongside backend developers to ensure seamless data flow and smooth functionality across all modules.
          </p>
          <p className="para">Contributed to improving UI functionality, reducing page load times, and enhancing SEO performance through optimized frontend practices.</p>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
