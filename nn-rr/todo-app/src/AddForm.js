import { Component } from "react";

class AddForm extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit it", this.state.content);
    this.props.addTodo({ content: this.state.content });
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo : </label>
          <input
            type="text"
            placeholder="add new todo"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default AddForm;
