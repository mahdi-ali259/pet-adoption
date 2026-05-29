import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md custom-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Pet Adopt 🐾
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Pets">
                Adopt
              </Link>

            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/AddPet">
                Add Pet
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;