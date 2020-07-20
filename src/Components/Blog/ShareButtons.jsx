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
  const size = props.size;
  return (
    <div style={{ display: "inline" }}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round={true} className="social-media-icon" />
      </FacebookShareButton>
      <TwitterShareButton url={size}>
        <TwitterIcon size={size} round={true} className="social-media-icon" />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={size} round={true} className="social-media-icon" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
