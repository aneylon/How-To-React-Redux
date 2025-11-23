import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const deleteBlog = (id) => {
    console.log("delete", id);
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log({ data });
        history.push("/");
      });
  };
  return (
    <div className="blog-details">
      {isPending && <div>...Loading...</div>}
      {error && <div>{error}</div>}
      {data && !isPending && (
        <article>
          <h1>
            {data.title} # : {id}
          </h1>
          <p>Written by : {data.author}</p>
          <div>{data.body}</div>
          <button onClick={() => deleteBlog(data.id)}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
