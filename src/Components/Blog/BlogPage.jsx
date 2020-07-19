import React from "react";
import Blogs from "../../data/Blogs/Blogs";
import ShareButtons from "./ShareButtons";

const BlogPage = () => {
  const blog = Blogs[0];
  const { RenderdText } = blog;
  console.log(RenderdText);
  return (
    <div className="blog-page">
      <h2>{blog.title}</h2>
      <RenderdText />
      <div className="share-div-2">
        <span> Share With</span>
        <ShareButtons url={"www.google.com"} />
      </div>
    </div>
  );
};

export default BlogPage;
