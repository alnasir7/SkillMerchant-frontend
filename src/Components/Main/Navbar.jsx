import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import icon from "../../misc/icon5.png";
import { changeSidebar } from "../../Actions/Actions";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = ({ props }) => {
  const dispatch = useDispatch();
  const dropSidebar = () => {
    dispatch({ type: changeSidebar });
  };
  const history = props.history;

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      className="My-dropdown dropdown-button"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="custom-list-dropdown">
            {React.Children.toArray(children)}
          </ul>
        </div>
      );
    }
  );

  //<i class="fas fa-chevron-down"></i>;

  return (
    <nav className="navbar custom-nav" id="navbar">
      <div className="flex-nav-container container">
        <div className="flexItem sidebar-container">
          <i onClick={dropSidebar} className="fas fa-bars"></i>
        </div>
        <div className="spacer-mobile"></div>
        <div className="flexItem img-container">
          <Link to="/home">
            <img src={icon} alt="Logo Unavailable" />
          </Link>
          <span style={{}}>
            <span> The Skill Merchant </span>
          </span>
        </div>
        <div className="spacer"></div>

        <div className="flexItem dropdown-container">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Explore
              <i className="fas fa-chevron-down ml-3"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-list-dropdown" as={CustomMenu}>
              <Dropdown.Item
                onClick={() => {
                  history.push("/home");
                }}
                className="dropdown-item-custom"
                eventKey="1"
              >
                Home
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  history.push("/home");
                }}
                className="dropdown-item-custom"
                eventKey="3"
              >
                Blog
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/about");
                }}
                className="dropdown-item-custom"
                eventKey="4"
              >
                About
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/contact");
                }}
                className="dropdown-item-custom"
                eventKey="5"
              >
                Contact us
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="flexItem"></div>
      </div>
    </nav>
  );
};

export default Navbar;
