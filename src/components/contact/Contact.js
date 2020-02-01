import React from "react";
import Button from "../../shared/buttons/Button";

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        DROP A MESSAGE
        <span role="img" aria-label="emoji">
          🚀
        </span>
      </h2>
      <div className="contact-page">
        <form name="contact" method="POST" data-netlify="true">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message...."
            ></textarea>
          </div>
          <Button name="Shoot Me" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
