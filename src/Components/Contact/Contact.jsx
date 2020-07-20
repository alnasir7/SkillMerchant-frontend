import React, { useState } from "react";

import { FacebookIcon, EmailIcon, ViberIcon } from "react-share";
import * as userServices from "../../Services/userServices";

const Contact = () => {
  const [message, changeMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeInput = (event) => {
    changeMessage({ ...message, [event.target.name]: event.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await userServices.sendMessage(message);
    changeMessage({ firstName: "", lastName: "", email: "", message: "" });
    alert("Message Sent");
  };

  return (
    <div>
      <div className="first-section">
        <div className="title-div">
          <h1>Contact Us</h1>
        </div>

        <div className="paragraph-div">
          <p>
            You can contact us through email or phone. However, we may not be
            available 24/7 for phone calls. Hence, we prefere you send us
            emails. You can also visit our facebook page for more information
          </p>
        </div>
      </div>
      <div className="second-section">
        <div>
          <h4 className="contact-information">Contact Information: </h4>
        </div>

        <div className="container-fluid contact-information-container">
          <div className="row">
            <div className="col col-3 col-md-1">
              <FacebookIcon size={60} round={true} />
            </div>
            <div className="col col-8 col-md-6">
              <a
                href="https://www.facebook.com/mohammed.alnasir.908"
                target="blank"
              >
                <h6>Click Here to Visit our Facebook Page</h6>
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col col-3 col-md-1 ">
              <EmailIcon size={60} round={true} />
            </div>
            <div className="col col-8 col-md-6">
              <h6>Mohammed.eltigani@uwccostarica.org</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col col-3 col-md-1">
              <ViberIcon size={60} round={true} />
            </div>
            <div className="col col-8 col-md-6">
              <h6>+506 7168 5725</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="containter-fluid ">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-4 message-container">
            <h3>Leave us a message</h3>
            <form
              style={{
                margin: "0 auto",
                paddingLeft: "10%",
                paddingRight: "10%",
              }}
              onSubmit={sendMessage}
            >
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={message.firstName}
                  onChange={changeInput}
                  autoComplete="off"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  id="lastName"
                  value={message.lastName}
                  onChange={changeInput}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  id="email"
                  value={message.email}
                  onChange={changeInput}
                ></input>
              </div>

              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  type="text"
                  rows="5"
                  autoComplete="off"
                  className="form-control"
                  id="lastName"
                  value={message.message}
                  onChange={changeInput}
                ></textarea>
              </div>

              <button
                className="btn btn-primary mt-3"
                type="submit"
                onClick={sendMessage}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
