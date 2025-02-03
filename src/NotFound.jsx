import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>We Coudn&apos;t Found this page</p>
      <Link to="/">Return to Home Page...</Link>
    </div>
  );
};

export default NotFound;
