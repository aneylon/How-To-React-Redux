import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("bro");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const newBlog = { title, body, author };
    console.log("submit it", newBlog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        console.log("new blog?", res);
        setIsPending(false);
        history.push("/");
        return res.json();
      })
      .then((data) => console.log({ data }));
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {isPending && <div>...submitting new blog...</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title : </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="body">Blog Body : </label>
        <textarea
          name="body"
          id="body"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label htmlFor="author"></label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="dude">dude</option>
          <option value="bro">bro</option>
          <option value="man">man</option>
        </select>
        <button disabled={isPending}>add blog</button>
      </form>
    </div>
  );
};

export default Create;
