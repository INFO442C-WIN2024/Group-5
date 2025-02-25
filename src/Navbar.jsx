import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClass =
      "text-white transition-all hover:scale-110 inline-block font-medium";
    return location.pathname === path
      ? `${baseClass} text-pink-200 scale-140`
      : `${baseClass} hover:text-pink-200`;
  };

  return (
    <nav className="fixed w-full top-0 bg-gradient-to-r from-purple-800/90 to-pink-600/90 backdrop-blur-sm shadow-lg shadow-black/25 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center justify-end space-x-8 h-16">
          <li>
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/friends" className={getLinkClass("/friends")}>
              Friends
            </Link>
          </li>
          <li>
            <Link to="/profile" className={getLinkClass("/profile")}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/signin" className={getLinkClass("/signin")}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
