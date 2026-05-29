import { Link } from "react-router-dom";
import PetCard2 from "../assets/PetCard2.jpg";
import { LocationPin } from "@mui/icons-material";

function Pet2() {
  return (

    <div className="py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            <img
              src={PetCard2}
              alt="Luna"
              className="img-fluid details-img about-img"
            />

          </div>

          <div className="col-md-6 about-section back">

            <h2>
              Luna 🐱
            </h2>

            <p className="text-muted">
              1 year old • Playful Cat
            </p>

            <p>
              Luna is a gentle and curious cat who loves
              to explore her surroundings.
              She enjoys quiet moments and cuddles,
              making her a perfect companion.
            </p>

            <p>
              <strong>Gender:</strong> Female
            </p>

            <p>
              <strong>Location:</strong> <LocationPin />Tyre
            </p>

            <p>
              <strong>Breed:</strong> Scottish Fold
            </p>

            <ul className="list-unstyled">

              <li>✔️ Vaccinated</li>

              <li>✔️ Calm and friendly</li>

              <li>✔️ Loves attention</li>

            </ul>

            <button className="btn btn-main mt-3 me-3">
              Adopt Now
            </button>

            <Link
              to="/pets"
              className="btn btn-back-outline mt-3"
            >
              ← Back to Pets
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Pet2;