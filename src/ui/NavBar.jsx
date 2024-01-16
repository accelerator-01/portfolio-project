import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <button className="button">
            <Link to="/">Home</Link>
          </button>
          <div className="inset-y-0 left-0 flex">
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
