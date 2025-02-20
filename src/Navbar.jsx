import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signin">Signin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;