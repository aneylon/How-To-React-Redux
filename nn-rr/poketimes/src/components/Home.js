import React, { Component } from "react";
// import axios from "axios";

// const Home = () => {
class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   console.log({ res });
    // });
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log({ res });
      console.log(
        res.json().then((stuff) => {
          console.log(stuff);
          this.setState({
            posts: stuff,
          });
        })
      );
    });
  }
  render() {
    const { posts } = this.state;
    console.log(this.state);
    console.log({ posts });
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>No posts Yet</div>
    );
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repudiandae repellat illo magni eligendi cupiditate voluptates eius
            nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
            deserunt eligendi explicabo totam?
          </p>
          <div> {postList}</div>
        </div>
      </div>
    );
  }
}

export default Home;
