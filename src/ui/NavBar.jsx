import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="mx-auto max-w-7xl bg-blue-800 px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <button className="button">
          <Link to="/">Home</Link>
        </button>
        <button className="button">
          <Link to="/portfolio">Project</Link>
        </button>
        <button className="button">
          <Link to="/about">About Me</Link>
        </button>
        <button className="button">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
