import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarOpen = useSelector((store) => store.sidebarReducer);
  const dispatch = useDispatch();

  const closeBar = () => {
    dispatch({ type: "changeSidebar" });
  };

  return (
    <React.Fragment>
      <div className={sidebarOpen ? "sidebar" : "sidebar-closed"}>
        <ul style={{ listStyle: "none" }} className="sidebarList">
          <li onClick={closeBar} className="list-custom-item">
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
          </li>

          <li onClick={closeBar} className="list-custom-item">
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              About Us
            </Link>
          </li>
          <li onClick={closeBar} className="list-custom-item">
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
