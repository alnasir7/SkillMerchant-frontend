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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            dignissimos modi nemo est nisi, quae optio facilis tenetur quidem,
            accusantium sapiente ipsa. Quam, animi dignissimos! Numquam
            exercitationem quam tempora tempore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam ad doloribus consequuntur non
            quibusdam, exercitationem in cupiditate aliquam aliquid harum error
            quaerat saepe maiores, esse qui totam! Excepturi, soluta doloribus?
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
