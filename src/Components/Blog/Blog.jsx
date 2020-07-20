import React from "react";
import { useHistory } from "react-router-dom";
import ShareButtons from "./ShareButtons";

const Blog = ({ blogObject, direction }) => {
  let history = useHistory();
  const { text, image, _id, title } = blogObject;
  const gotoBlog = () => {
    history.push("blog/" + _id);
  };
  return (
    <div className="row blog-row">
      {direction === "right" ? <div className="col-0 col-lg-2"></div> : null}

      <div
        className={
          direction === "right"
            ? " col col-12 col-lg-4 blog-image order-lg-12"
            : " col col-12 col-lg-4 blog-image"
        }
      >
        <img src={image} alt="image Unavailable" />
      </div>
      <div
        className={
          direction === "right"
            ? " col col-12 col-lg-6 blog-text order-lg-1"
            : "  col col-12 col-lg-6 blog-text"
        }
      >
        <h4>{title}</h4>
        <p>{text.slice(0, 360)} ...</p>
        <div>
          <button
            onClick={gotoBlog}
            className="custom-button custom-button-blog"
          >
            Read More
          </button>
          <div className="share-div">
            <ShareButtons size={40} url={"www.google.com"} />
          </div>
        </div>
      </div>
      {direction === "left" ? <div className="col-0 col-lg-2"></div> : null}
    </div>
  );
};

export default Blog;
