import React, { useState } from "react";
import SubscribeModal from "./subscribeModal";
import Blog from "../Blog/Blog";
import Blogs from "../../data/Blogs/Blogs";

const Homepage = () => {
  const text = "Learn a skill,           \r\n                earn a fortune";

  const [modal, changeModal] = useState(false);

  const handleOpenModal = () => {
    changeModal(true);
  };

  return (
    <div className="container-fluid main-div">
      <SubscribeModal ModalState={modal} changeModal={changeModal} />

      <div className="row home-div">
        <div className="col col-12 main-page">
          <h1 className="mission-statement">{text}</h1>

          <br></br>
          <div className="secondary-text">
            <span>
              There is no doubt that the world is experiencing a massive shift
              towards online educational platforms. The skill merchant blog
              helps you explore your interests and develop your skill, to
              prepare yourself for an online future.
            </span>
          </div>
          <button
            className="custom-button home-subscribe-button"
            onClick={handleOpenModal}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="intro-container">
        <div className="row blog-intro">
          <h1>View our blog</h1>
        </div>
      </div>

      <div className="row blog-container">
        <div className="container">
          <Blog blogObject={Blogs[1]} direction="right"></Blog>
          <Blog blogObject={Blogs[0]} direction="left"></Blog>
        </div>
      </div>
    </div>
  );
};

// return (
//   <div
//     style={{
//       minWidth: "100vw",
//       minHeight: "100vh",
//       maxWidth: "100vw",
//       position: "relative",
//       backgroundColor: "#041C2C",
//     }}
//   >
//     <div
//       style={{
//         position: "absolute",
//         textAlign: "center",
//         color: "black",
//         minHeight: "10vh",
//         width: "100%",
//         zIndex: "2",
//         backgroundColor: "rgba(230,230,230,0.7)",
//       }}
//     >
//       <h1 style={{ opacity: "1" }}>
//         Buy the best Sport Watches from Zeeshan Enterprises
//       </h1>
//     </div>
//     <div>
//       <img
//         style={{
//           objectFit: "cover",
//           height: "auto",
//           maxHeight: "65vh",
//         }}
//         src={image}
//         alt="Error 404"
//       />
//     </div>
//     <div style={{ margin: "35px", textAlign: "start" }}>
//       <h1 style={{ color: "white" }}>Best Offers</h1>
//     </div>
//     <div style={{ textAlign: "start", paddingBottom: "10vh" }}>
//       <div className="container">
//         <div className="row">
//           <div className="col col-5">
//             <BigCard product={product} />
//           </div>
//           <div className="col col-2"></div>
//           <div className="col col-5">
//             <BigCard product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// <div className="row" className="second-page">
//         <div className="col col-12 timesFont">
//           <h1 className="second-header">Explore your interests</h1>
//         </div>
//         <hr />
//         <div className="col col-0 col-md-1"></div>
//         <div className="col col-12 col-md-3 card-custom">
//           <div className="imageContainer">
//             <img src={tech1} alt="oops" />
//           </div>
//           <h2 style={{ color: "#241679", marginTop: "28%" }}>System Design</h2>
//         </div>
//         <div className="col col-12 col-md-3 card-custom">
//           <div className="imageContainer">
//             <img src={tech2} alt="oops" />
//           </div>
//           <h2 style={{ color: "#241679", marginTop: "28%" }}>
//             Artificial Intelligence
//           </h2>
//         </div>
//         <div className="col col-12 col-md-3 card-custom">
//           <div className="imageContainer">
//             <img src={tech3} alt="oops" />
//           </div>
//           <h2 style={{ color: "#241679", marginTop: "28%" }}>Networks</h2>
//         </div>
//         <div className="col col-0 col-md-1"></div>
//         <hr />
//       </div>

export default Homepage;
