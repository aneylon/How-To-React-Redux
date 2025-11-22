import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export const Blogs = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  const deleteBlog = (id) => {
    console.log("delete", id);
    // const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    // setBlogs(updatedBlogs);
  };

  return (
    <div className="blogs">
      {isPending && <div>Loading...</div>}
      <BlogList blogs={data} title="All them Blogs!" deleteBlog={deleteBlog} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "dude")}
        title="The Dude's Blogs."
      /> */}
      {error && <div>{error}</div>}
    </div>
  );
};
