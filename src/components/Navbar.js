import { FavoriteBorder, Menu } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ favouritesCount, isFavouritesOpen, onOpenFavourites }) => {
  return (
    <nav className="navbar navbar-expand-md custom-navbar sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Pawzy
        </Link>

        <div className="navbar-pet-controls order-md-2">
          <button
            type="button"
            className="navbar-favourites"
            onClick={onOpenFavourites}
            aria-label={`Open favourites, ${favouritesCount} saved`}
            aria-expanded={isFavouritesOpen}
            aria-controls="favourites-drawer"
          >
            <FavoriteBorder aria-hidden="true" />
            <span aria-hidden="true">{favouritesCount}</span>
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation" aria-controls="navbarNav" aria-expanded="false">
            <span className="navbar-toggler-icon"><Menu aria-hidden="true" /></span>
          </button>
        </div>

        <div className="collapse navbar-collapse order-md-1" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Pets">
                Adopt
              </NavLink>

            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/AddPet">
                Add Pet
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;