import { useState } from "react";
import BlogList from "./BlogList";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "one",
      body: "Lorem ipsum dolor sit amet.",
      author: "dude",
      id: 1,
    },
    {
      title: "two",
      body: "amet consectetur adipisicing elit.",
      author: "bro",
      id: 2,
    },
    {
      title: "three",
      body: "Ad facere perspiciatis cum.",
      author: "man",
      id: 3,
    },
    {
      title: "four",
      body: "a ullam atque at quo enim illum porro!",
      author: "dude",
      id: 4,
    },
  ]);
  const deleteBlog = (id) => {
    console.log("delete", id);
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };
  return (
    <div className="blogs">
      <BlogList blogs={blogs} title="All them Blogs!" deleteBlog={deleteBlog} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "dude")}
        title="The Dude's Blogs."
      /> */}
    </div>
  );
};
