import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareButtons = (props) => {
  const url = props.url;
  return (
    <div style={{ display: "inline" }}>
      <FacebookShareButton url={url}>
        <i className="fab fa-facebook fa-lg social-media-icon"></i>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <i className="fab fa-twitter fa-lg social-media-icon"></i>
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <i class="fab fa-whatsapp fa-lg social-media-icon"></i>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
