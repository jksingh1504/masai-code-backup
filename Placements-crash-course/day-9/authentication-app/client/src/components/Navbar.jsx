import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link style={{ marginRight: "30px" }} to="/signup">
          Sign-up
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
