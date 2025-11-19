import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("one");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    console.log("click it");
    setName("two");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age}
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default Home;
