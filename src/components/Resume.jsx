import React from "react";

function Resume() {
  return (
    <div className="p-3 bg-white shadow rounded">
      <h2 className="mb-3">Resume</h2>
      
      {/* Education */}
      <div className="mb-4">
        <h4>Education</h4>
        <ul>
          <li>
            <strong>BSc in MPCS</strong> – Osmania University, Haindhavi Degree College (Year)
          </li>
          <li>
            <strong>Intermediate MPC</strong> – TG Modal Govt School (Year)
          </li>
          <li>
            <strong>Schooling</strong> – ZPHS School (2008–2013)
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h4>Experience</h4>
        <ul>
          <li>
            <strong>UI Developer</strong> – COA Network (2+ Years)
            <br />
            Projects: HireGuard, iTeleCenter Blog, Experthiring, etc.
          </li>
          <li>
            <strong>Freelance Projects</strong> – Portfolio websites, WordPress customizations.
          </li>
        </ul>
      </div>

      {/* Skills Snapshot */}
      <div className="mb-4">
        <h4>Technical Skills</h4>
        <p>HTML, CSS, JavaScript, React.js, Bootstrap, WordPress, .NET (basics), Git</p>
      </div>

      {/* Download Resume */}
      <div>
        <a
          href="/resume.pdf"
          download
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
