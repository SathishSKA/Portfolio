import React from "react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // service id, template id and your public key, get these by registering on EmailJs
      .sendForm("service_diihtle", "template_4ceut4c", form.current, "39g5gE9bZnYszcjBY")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="container-fluid bg-secondary p-5">
      <div className="d-sm-flex  align-items-center justify-content-center">
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: "none" }} className="p-4">
              <li className="m-3 shadow-sm">
                <input className="form-control form-class" placeholder="Name" type="text" name="user_name" required />
              </li>
              <li className="m-3 shadow-sm">
                <input className="form-control form-class" placeholder="Email" type="email" name="user_email" required />
              </li>
              <li className="m-3 shadow-sm">
                <input placeholder="Subject" className="form-control form-class" type="text" name="Subject" required />
              </li>
              <li className="m-3 shadow-sm">
                <textarea placeholder="Message" name="message" required className="form-control form-class"></textarea>
              </li>
              <li>
                <input type="submit" className="btn btn-primary custom-btn fw-bold m-3 px-5" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
