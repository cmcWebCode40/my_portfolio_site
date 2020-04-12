import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState("");
  const encode = (data) => {
    return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...userData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
      console.log(userData);

  }
  return (
    <div className="contact">
      <h2>
        Drop A Message
        <span role="img" aria-label="emoji">
          🚀
        </span>
      </h2>
      <div className="contact-page">
        {/* method="POST" data-netlify="true" */}
        <form name="contact" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="Enter your Name" />
          </div>
          <div className="form-group">
            <input type="text" name="subject" onChange={(e) => setUserData({ ...userData, subject: e.target.value })} placeholder="Subject" />
          </div>
          <div className="form-group">

            <textarea
              name="message"
              cols="30"
              rows="10"
              onChange={(e) => setUserData({ ...userData, message: e.target.value })}
              placeholder="Enter your message...."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-pri">HIT ME UP</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
