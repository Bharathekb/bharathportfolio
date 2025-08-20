import React from "react";

function Header() {
  return (
    <div className="card shadow-sm p-4 text-center mb-5">
      <img 
        src="https://via.placeholder.com/120" 
        alt="Profile" 
        className="rounded-circle mb-3"
      />
      <h2>Bharath Chandra</h2>
      <h5 className="text-muted">UI Developer | React & WordPress Specialist</h5>
      <a 
        href="/resume.pdf" 
        className="btn btn-primary mt-3" 
        download
      >
        Download Resume
      </a>
    </div>
  );
}

export default Header;
