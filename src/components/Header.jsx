import React from "react";

function Header() {
  return (
    <div className="card my-box my-border p-4 text-center">
      <img 
        src="/images/bharath.svg" 
        alt="Profile" 
        className="My-profile rounded-circle mb-3 img-fluid"
      />
      <h1 className="heading-1">Bharath Chandra</h1>
      <h3 className="text-muted heading-3 fw-500">Frontend Developer | React.js | JavaScript | HTML | CSS</h3>
      <a 
        href="/resume.pdf" 
        className="btn my-btn btn-orange-bg mx-auto py-2 mt-3 btn-w-300" 
        download
      >
        Download resume
      </a>
    </div>
  );
}

export default Header;
