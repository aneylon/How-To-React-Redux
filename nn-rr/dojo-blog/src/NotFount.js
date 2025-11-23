import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Not Found!</h2>
      <p>Unable to find the requested resource.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
