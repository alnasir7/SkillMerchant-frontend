import React from "react";
import Blogs from "../../data/Blogs/Blogs";
import ShareButtons from "./ShareButtons";
import BlogAuthor from "./BlogAuthor";

const BlogPage = ({ match }) => {
  const blog = Blogs[match.params.id - 1];

  const { RenderdText } = blog;

  return (
    <div className="blog-page">
      <h2>{blog.title}</h2>
      <BlogAuthor date={blog.date} authorId={blog.authorId} />
      <RenderdText />
      <div className="share-div-2">
        <ShareButtons size={40} url={"www.google.com"} />
      </div>
    </div>
  );
};

export default BlogPage;
