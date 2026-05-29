import { Link } from "react-router-dom";
import PetCard1 from "../assets/PetCard1.jpg";
import { LocationPin } from "@mui/icons-material";

function Pet1() {
  return (
    <div className="py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-6">

            <img
              src={PetCard1}
              alt="Max"
              className="img-fluid details-img about-img"
            />

          </div>

          <div className="col-md-6 about-section back">

            <h2>
              Max 🐶
            </h2>

            <p className="text-muted">
              1 year old • Friendly Dog
            </p>

            <p>
              Max is a playful and loving dog who enjoys
              spending time with people.
              He is looking for a warm and caring home.
            </p>

            <p>
              <strong>Gender:</strong> Male
            </p>

            <p>
              <strong>Location:</strong> <LocationPin />Tyre
            </p>

            <p>
              <strong>Breed:</strong> Beagles
            </p>

            <ul className="list-unstyled">

              <li>✔️ Vaccinated</li>

              <li>✔️ Good with kids</li>

              <li>✔️ Energetic</li>

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

export default Pet1;