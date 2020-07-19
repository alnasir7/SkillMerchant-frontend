import React from "react";
import { founders } from "../../data/Founders";

const FounderCard = ({ id }) => {
  const founder = founders.filter((founder) => founder.id === id)[0];
  return (
    <div className="custom-founder-card">
      <img src={founder.image} alt="" />
      <div className="">
        <h2>{founder.fullName}</h2>
        <h3>{founder.job}</h3>
        <p>{founder.text}</p>
      </div>
    </div>
  );
};

export default FounderCard;
