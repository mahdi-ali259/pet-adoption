import { Link } from "react-router-dom";
import PetCard3 from "../assets/PetCard3.jpg";
import { LocationPin } from "@mui/icons-material";

function Pet3() {
  return (

    <div className="py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            <img
              src={PetCard3}
              alt="Rocky"
              className="img-fluid details-img about-img"
            />

          </div>

          <div className="col-md-6 about-section back">

            <h2>
              Rocky 🐶
            </h2>

            <p className="text-muted">
              2 years old • Energetic Dog
            </p>

            <p>
              Rocky is an energetic and loyal dog who
              loves outdoor activities.
              He is always ready to play and would be
              a great match for an active owner.
            </p>

            <p>
              <strong>Gender:</strong> Male
            </p>

            <p>
              <strong>Location:</strong> <LocationPin />Tyre
            </p>

            <p>
              <strong>Breed:</strong> Australian Kelpie
            </p>

            <ul className="list-unstyled">

              <li>✔️ Vaccinated</li>

              <li>✔️ Very active</li>

              <li>✔️ Great with families</li>

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

export default Pet3;