import { LocationPin } from "@mui/icons-material";

const PetDetails = ({ pet, onBack }) => {

  if (!pet) {
    return null;
  }

  return (
    <div className="py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

            {pet.image ? (
              <img
                src={pet.image}
                alt={pet.name}
                className="img-fluid about-img"
              />
            ) : (
              <p>No image provided</p>
            )}

          </div>

          <div className="col-md-6 about-section back">

            <h2>
              {pet.name} {pet.emoji}
            </h2>

            <p className="text-muted">
              {pet.subtitle}
            </p>

            <p>
              {pet.fullDescription}
            </p>

            {pet.gender && (
              <p>
                <strong>Gender:</strong> {pet.gender}
              </p>
            )}

            {pet.location && (
              <p>
                <strong>Location:</strong> <LocationPin />{pet.location}
              </p>
            )}

            {pet.breed && (
              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>
            )}

            {pet.traits && (
              <ul className="list-unstyled">

                {pet.traits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}

              </ul>
            )}

            <button className="btn btn-main mt-3 me-3">
              Adopt Now
            </button>

            <button
              type="button"
              onClick={onBack}
              className="btn btn-back-outline mt-3"
            >
              ← Back to Pets
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PetDetails;
