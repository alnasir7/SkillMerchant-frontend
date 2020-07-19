import React, { useState } from "react";
import Modal from "react-modal";
import * as userServices from "../../Services/userServices";

const SubscribeModal = ({ ModalState, changeModal }) => {
  const changeInput = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };

    changeUser({ ...user, [event.target.name]: event.target.value });
  };

  const [user, changeUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const subscribe = async () => {
    await userServices.subscribeUser(user);
    changeUser({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <Modal
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(150, 150, 150, 0.75)",
        },
        content: {
          position: "absolute",
          top: "18vh",
          left: "12vw",
          right: "12vw",
          bottom: "18vh",
          border: "1px solid #ccc",
          textAlign: "center",
          background: "white",
          color: "black",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          outline: "none",
          padding: "20px",
        },
      }}
      isOpen={ModalState}
      onRequestClose={() => changeModal(false)}
      className="image-modal"
    >
      <h3>Subsrcibe</h3>
      <div>
        <form className="modal-form" onSubmit={subscribe}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
              value={user.firstName}
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
              value={user.lastName}
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
              value={user.email}
              onChange={changeInput}
            ></input>
          </div>

          <button className="btn btn-primary mt-3" type="submit">
            Subrscribe
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
