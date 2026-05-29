import { Link } from "react-router-dom";
import PetCard1 from "../assets/PetCard1.jpg";
import PetCard2 from "../assets/PetCard2.jpg";
import PetCard3 from "../assets/PetCard3.jpg";

function Pets() {

    const pets = [
        {
            id: 1,
            name: "Max",
            age: "1 year",
            description: "Friendly",
            image: PetCard1,
            path: "/pet1"
        },

        {
            id: 2,
            name: "Luna",
            age: "1 year",
            description: "Cute",
            image: PetCard2,
            path: "/pet2"
        },

        {
            id: 3,
            name: "Rocky",
            age: "2 years",
            description: "Playful",
            image: PetCard3,
            path: "/pet3"
        }
    ];

    return (
        <div>
            <div className="py-5 about-section text-center back">
                <h2>Adopt a Friend 🐾</h2>
            </div>

            <div className="pets-section pb-5">

                <div className="container">

                    <div className="row">

                        {pets.map((pet) => (

                            <div
                                key={pet.id}
                                className="col-md-4 mb-4"
                            >

                                <div className="card pet-card">

                                    <img
                                        src={pet.image}
                                        className="card-img-top"
                                        alt={pet.name}
                                    />

                                    <div className="card-body text-center">

                                        <h5>{pet.name}</h5>

                                        <p>
                                            {pet.age} • {pet.description}
                                        </p>

                                        <Link
                                            to={pet.path}
                                            className="btn btn-main"
                                        >
                                            Adopt Me
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Pets;