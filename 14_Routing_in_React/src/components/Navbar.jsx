import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h1>Navbar</h1>
      <div className="nav-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
