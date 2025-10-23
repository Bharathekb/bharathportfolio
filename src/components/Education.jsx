import React from "react";

function Education() {
  return (
    <div className="card my-box my-border p-4">
      <h2 className="heading-2 fw-500 mb-3">Education</h2>
      <ul className="timeline list-unstyled my-list">
        <li className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="heading-4 fw-500">Bachelor of Science (B.Sc.) in MPCS </h4>
            <small className="para text-muted">July 2015 – Oct 2019 </small>
          </div>
           <p className="para">
          Osmania University, Haindhavi Degree College, Hyderabad
          </p>
        </li>
        <li className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="heading-4 fw-500">Intermediate (MPC)</h4>
            <small className="para text-muted">July 2015 – Oct 2019 </small>
          </div>
           <p className="para">
          TG Modal Govt School, Dharmapuri
          </p>
        </li>
         <li className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="heading-4 fw-500">SSC</h4>
            <small className="para text-muted">June 2012 - April 2013</small>
          </div>
           <p className="para">
         Z.P.H.S High School, Jaina, Dharmapuri
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Education;
