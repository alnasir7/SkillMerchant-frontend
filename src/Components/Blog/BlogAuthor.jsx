import React from "react";
import ShareButtons from "./ShareButtons";
import { founders } from "../../data/Founders";

const BlogAuthor = ({ authorId, date }) => {
  const author = founders[authorId - 1];
  console.log(authorId);
  return (
    <div className="container ">
      <div className="row blog-author">
        <div className="col-6 col-lg-3">
          <img src={author.image} alt="" />
        </div>
        <div className="col-6 col-lg-3">
          <table>
            <tr>
              <td>
                <h3>{author.fullName}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <h4>{date}</h4>
              </td>
            </tr>
          </table>
        </div>
        <div className="spacer-author col-0 col-lg-2"></div>
        <div className="col-12 col-lg-4 share-div-author-container">
          <div className="share-div-author">
            <ShareButtons size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthor;
