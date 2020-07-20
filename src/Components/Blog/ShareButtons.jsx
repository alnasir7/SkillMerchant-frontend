import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

const ShareButtons = (props) => {
  const url = props.url;
  return (
    <div style={{ display: "inline" }}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} className="social-media-icon" />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={40} round={true} className="social-media-icon" />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={40} round={true} className="social-media-icon" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
