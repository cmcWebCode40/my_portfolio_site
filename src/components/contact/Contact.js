import React, { useState } from "react";
import contactImg from '../../images/contact.png';

const Contact = () => {
  const [userData, setUserData] = useState("");
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...userData })
    })
      .then(() => {
        alert(`Thank you ${userData.name} will get back to you at once 😊 you can as well DM via the social link 👇`);
        setUserData({ name: "", subject: "", message: "" })
      })
      .catch(error => alert(error));
  };
  return (
    <div className="contact">
      <h2>
        <img src={contactImg} height="200" width="200" alt="about me" />
      </h2>
      <div className="contact-page">
        {/* method="POST" data-netlify="true" */}
        <form name="contact" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={userData.name} name="name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="Enter your Name" required />
          </div>
          <div className="form-group">
            <input type="text" value={userData.subject} name="subject" onChange={(e) => setUserData({ ...userData, subject: e.target.value })} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              cols="30"
              rows="10"
              value={userData.message}
              onChange={(e) => setUserData({ ...userData, message: e.target.value })}
              placeholder="Enter your message...."
              required></textarea>
          </div>
          <button type="submit" className="btn btn-pri">SEND I WILL RECEIVE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
