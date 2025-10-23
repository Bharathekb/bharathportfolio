import React, { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://formspree.io/f/mnngkeww", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    if (response.ok) {
      setStatus("Submit");
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="card my-box my-border p-4">
      <h2 className="heading-2 fw-500 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {status}
        </button>
      </form>
    </div>
  );
}

export default Contact;


// function Contact() {
//   return (
//     <div id="contact" className="Form-box">
    
//     </div>
//   );
// }

