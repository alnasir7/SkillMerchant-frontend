import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useWindowScroll } from "react-use";
//import ScrollToTop from "../../ScrollToTop";
import Navbar from "./Navbar";
import Homepage from "../Home/Homepage";
import Sidebar from "./Sidebar";
import AboutUs from "../About/AboutUs";
import BlogPage from "../Blog/BlogPage";
import Contact from "../Contact/Contact";
import Footer from "./footer";

const RootApp = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((store) => store.sidebarReducer);
  const { y } = useWindowScroll();
  const [visable, changeVisable] = useState(false);

  useEffect(() => {
    if (y >= 600) changeVisable(true);
    else changeVisable(false);
  }, [y]);

  const backToTop = () => {
    window.scroll({ top: 0, behaviour: "smooth" });
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <button onClick={backToTop} hidden={!visable} className="back-to-top">
          <i class="fas fa-arrow-up"></i>
        </button>
        <div style={{ position: "relative" }}>
          <Route path="/" render={(props) => <Navbar props={props} />} />
          <Sidebar />
          <div
            onClick={() => {
              if (sidebar) dispatch({ type: "changeSidebar" });
            }}
            style={sidebar ? { opacity: 0.7 } : {}}
            className="conatiner program"
          >
            <Route path="/home" component={Homepage} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog/:id" component={BlogPage} />
            <Redirect from="/" exact to="/home" />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default RootApp;
