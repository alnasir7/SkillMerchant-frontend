import React from "react";
import FounderCard from "./FounderCard";

const AboutUs = () => {
  return (
    <div className=" about-container">
      <div className="row about-statement">
        <div className="col-12" style={{ height: "100%" }}>
          <h2 className="mb-4">About Us</h2>
          <h3>Our Mission</h3>
          <p>
            Our mission is to help guide during the online shift the world is
            experiencing. The skill merchant was conceived in response to the
            Covid-19 crisis to help people adapt to the changes that are
            happening, and present them with new ways of exploring their
            interests. We aim to teach people how to make the most of these hard
            times and utilize this opportunity to learn new skills.
          </p>
        </div>
      </div>
      <div className="row team-row">
        <h1>Meet Our Team</h1>
      </div>
      <div className="row team-cards-row">
        <div className="col col-12 col-md-6 founder-card-container">
          <FounderCard id={1} />
        </div>
        <div className="col col-12 col-md-6 founder-card-container">
          <FounderCard id={2} />{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
