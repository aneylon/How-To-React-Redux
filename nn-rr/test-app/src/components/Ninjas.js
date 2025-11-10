import { Component } from "react";

// class Ninjas extends Component {
const Ninjas = (props) => {
  //   render() {
  //   const { ninjas } = this.props;
  const { ninjas, deleteNinja } = props;
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => deleteNinja(ninja.id)}>delete ninja</button>
      </div>
    );
  });
  return <div>{ninjaList}</div>;
  //   }
};

export default Ninjas;
