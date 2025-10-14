import React from "react";

function Header() {
  return (
    <div className="card my-box my-border p-4 text-center mb-5">
      <img 
        src="/images/bharath.svg" 
        alt="Profile" 
        className="My-profile rounded-circle mb-3 img-fluid"
      />
      <h1 className="heading-1">Bharath Chandra</h1>
      <h3 className="text-muted heading-3 fw-500">UI Developer | React & WordPress Specialist</h3>
      <a 
        href="/resume.pdf" 
        className="btn my-btn btn-orange-bg mx-auto mt-3 btn-w-300" 
        download
      >
        Download Resume
      </a>
    </div>
  );
}

export default Header;
