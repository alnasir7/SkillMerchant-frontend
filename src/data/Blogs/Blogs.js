import blogIcon1 from "../../misc/online-learning.jpg";
import blogIcon2 from "../../misc/Programming.jpg";
import FirstBlog from "./FirstBlog";
import SecondBlog from "./SecondBlog";

const blog1 = {
  title: "5 ways online courses can help you during and after quarantine",
  _id: 1,
  text:
    "Work is probably the last thing you would want to do during a global pandemic, but ask yourself, when will be the next time you ever get so much free time in your life? Netflix is one way of cutting downtime, but if you are reading this blog post, I’m guessing you’re tired of that already and want to move into the more constructive feature of this boredom.",
  image: blogIcon1,
  authorId: 2,
  date: "12 July 2020",
  RenderdText: FirstBlog,
};

const blog2 = {
  title: "Introduction to Programming",
  _id: 2,
  text:
    "Programming is a very diverse field that has various applications. You can use it to develop a mobile app, design websites, encrypt data for a banking security system, ..etc. Programming languages are tools used to achieve these applications. By themselves, programming language, usually aren't sufficient to deliver a full software product. They are a piece in the puzzle. The mistake most people fall into is trying to learn a specific programming language, or learn as many programming languages as possible.",
  image: blogIcon2,
  date: "17 July 2020",
  authorId: 1,
  RenderdText: SecondBlog,
};

const Blogs = [blog1, blog2];

export default Blogs;
