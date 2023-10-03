import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="header_logo">
        B-LOG
      </Link>
      <div>
        <Link to="/posts/new" className="header_menu">
          NEW POST
        </Link>
        <Link to="/posts" className="header_menu">
          POSTS
        </Link>
        <Link to="/profile" className="header_menu">
          MY
        </Link>
      </div>
    </header>
  );
}

export default Header;
