import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, deleteBlog }) => {
  const handleDelete = (id) => {
    console.log("delete", id);
    deleteBlog(id);
  };
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>by : {blog.author}</p>
            </Link>
            <button onClick={() => handleDelete(blog.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
