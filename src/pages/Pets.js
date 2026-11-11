import { useState, useEffect } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import PetDetails from "./PetDetails";
import PetCard1 from "../assets/PetCard1.jpg";
import PetCard2 from "../assets/PetCard2.jpg";
import PetCard3 from "../assets/PetCard3.jpg";
import PetCard4 from "../assets/PetCard4.webp";
import PetCard5 from "../assets/PetCard5.webp";
import PetCard6 from "../assets/PetCard6.webp";
import PetCard7 from "../assets/PetCard7.webp";
import PetCard8 from "../assets/PetCard8.webp";
import PetCard9 from "../assets/PetCard9.webp";
import PetCard10 from "../assets/PetCard10.webp";
import PetCard11 from "../assets/PetCard11.webp";
import PetCard12 from "../assets/PetCard12.webp";
import PetCard13 from "../assets/PetCard13.webp";
import PetCard14 from "../assets/PetCard14.webp";
import PetCard15 from "../assets/PetCard15.webp";
import PetCard16 from "../assets/PetCard16.webp";

export const pets = [
    {
        id: 1,
        type: "dog",
        name: "Max",
        age: "1 year",
        description: "Friendly",
        image: PetCard1,
        emoji: "🐶",
        subtitle: "1 year old • Friendly Dog",
        fullDescription: "Max is a playful and loving dog who enjoys spending time with people. He is looking for a warm and caring home.",
        gender: "Male",
        location: "Tyre",
        breed: "Beagles",
        traits: ["✔️ Vaccinated", "✔️ Good with kids", "✔️ Energetic"]
    },

    {
        id: 2,
        type: "cat",
        name: "Luna",
        age: "1 year",
        description: "Cute",
        image: PetCard2,
        emoji: "🐱",
        subtitle: "1 year old • Playful Cat",
        fullDescription: "Luna is a gentle and curious cat who loves to explore her surroundings. She enjoys quiet moments and cuddles, making her a perfect companion.",
        gender: "Female",
        location: "Tyre",
        breed: "Scottish Fold",
        traits: ["✔️ Vaccinated", "✔️ Calm and friendly", "✔️ Loves attention"]
    },

    {
        id: 3,
        type: "dog",
        name: "Rocky",
        age: "2 years",
        description: "Playful",
        image: PetCard3,
        emoji: "🐶",
        subtitle: "2 years old • Energetic Dog",
        fullDescription: "Rocky is an energetic and loyal dog who loves outdoor activities. He is always ready to play and would be a great match for an active owner.",
        gender: "Male",
        location: "Tyre",
        breed: "Australian Kelpie",
        traits: ["✔️ Vaccinated", "✔️ Very active", "✔️ Great with families"]
    },

    // Demo data; these details are not verified for the pictured animal.
    {
        id: 4,
        type: "dog",
        name: "Teddy",
        age: "3 months",
        description: "Little Puppy",
        image: PetCard4,
        emoji: "🐶",
        subtitle: "3 months old • Little Puppy",
        fullDescription: "Meet Teddy, a little puppy looking for a caring home. Contact us to learn more about his needs and adoption details.",
        gender: "Unknown",
        location: "Tyre",
        breed: "Unknown",
        traits: ["Vaccination status unknown"]
    },

    // Fictional demo data for the course project.
    {
        id: 5,
        type: "dog",
        name: "Bruno",
        age: "2 years",
        description: "Loyal Companion",
        image: PetCard5,
        emoji: "🐶",
        subtitle: "2 years old • Loyal Companion",
        fullDescription: "Bruno is a friendly and loyal dog who enjoys walks and playtime. He is looking for a loving family to share new adventures with.",
        gender: "Male",
        location: "Beirut",
        breed: "Mixed Breed",
        traits: ["Vaccinated", "Enjoys walks", "Loves playing"]
    },

    // Fictional demo data for the course project.
    {
        id: 6,
        type: "dog",
        name: "Bella",
        age: "8 years",
        description: "Gentle Friend",
        image: PetCard6,
        emoji: "🐶",
        subtitle: "8 years old • Gentle Friend",
        fullDescription: "Bella is a gentle dog who enjoys relaxing beside her family and taking short walks. She is looking for a peaceful, loving home where she can enjoy plenty of company and care.",
        gender: "Female",
        location: "Sidon",
        breed: "Mixed Breed",
        traits: ["Vaccinated", "Calm and gentle", "Enjoys short walks"]
    },

    // Fictional demo data for the course project.
    {
        id: 7,
        type: "rabbit",
        name: "Snowy",
        age: "1 year",
        description: "Curious Bunny",
        image: PetCard7,
        emoji: "🐰",
        subtitle: "1 year old • Curious Bunny",
        fullDescription: "Snowy is a curious rabbit who enjoys exploring and relaxing in a cozy space. He is looking for a caring family who can give him room to hop around and plenty of daily attention.",
        gender: "Male",
        location: "Tyre",
        breed: "Mixed Breed Rabbit",
        traits: ["Vaccinated", "Curious and playful", "Enjoys exploring"]
    },

    // Fictional demo data for the course project.
    {
        id: 8,
        type: "cat",
        name: "Milo & Mimi",
        age: "3 months each",
        description: "Must Be Adopted Together",
        image: PetCard8,
        emoji: "🐱🐱",
        subtitle: "3 months each • Must Be Adopted Together",
        fullDescription: "Milo and Mimi are a bonded pair of kittens who love playing, exploring, and curling up together. They must be adopted together into the same loving home, where they can grow up side by side.",
        gender: "Male & Female",
        location: "Beirut",
        breed: "Mixed Breed Cats",
        traits: ["Must be adopted together", "Vaccinated", "Playful and affectionate"]
    },

    // Fictional demo data for the course project.
    {
        id: 9,
        type: "bird",
        name: "Rio",
        age: "4 years",
        description: "Colorful Companion",
        image: PetCard9,
        emoji: "🦜",
        subtitle: "4 years old • Colorful Companion",
        fullDescription: "Rio is a colorful macaw who enjoys company, exploring toys, and daily interaction. He is looking for an experienced caregiver who can provide a spacious home, regular enrichment, and long-term companionship.",
        gender: "Male",
        location: "Byblos",
        breed: "Blue-and-yellow Macaw",
        traits: ["Enjoys interaction", "Playful and curious", "Loves enrichment toys"]
    },

    // Fictional demo data for the course project.
    {
        id: 10,
        type: "hamster",
        name: "Marshmallow",
        age: "6 months",
        description: "Tiny Explorer",
        image: PetCard10,
        emoji: "🐹",
        subtitle: "6 months old • Tiny Explorer",
        fullDescription: "Marshmallow is a curious little hamster who enjoys exploring, burrowing, and discovering new hiding spots. He is looking for a caring owner who can provide a spacious enclosure, plenty of bedding, and a peaceful place to rest.",
        gender: "Male",
        location: "Tripoli",
        breed: "Syrian Hamster",
        traits: ["Curious and active", "Enjoys burrowing", "Loves exploring"]
    },

    // Fictional demo data for the course project.
    {
        id: 11,
        type: "cat",
        name: "Nala",
        age: "3 months",
        description: "Playful Little Friend",
        image: PetCard11,
        emoji: "🐱",
        subtitle: "3 months old • Playful Little Friend",
        fullDescription: "Nala is a playful kitten who enjoys exploring, chasing toys, and relaxing on a cozy blanket. She is looking for a loving family who can give her daily attention and a welcoming home to grow up in.",
        gender: "Female",
        location: "Sidon",
        breed: "Domestic Shorthair",
        traits: ["Vaccinated", "Playful and curious", "Loves attention"]
    },

    // Fictional demo data for the course project.
    {
        id: 12,
        type: "dog",
        name: "Cooper",
        age: "3 years",
        description: "Cheerful Companion",
        image: PetCard12,
        emoji: "🐶",
        subtitle: "3 years old • Cheerful Companion",
        fullDescription: "Cooper is a cheerful dog who enjoys playtime, daily walks, and spending time with people. He is looking for a loving home where he can enjoy regular activities and plenty of companionship.",
        gender: "Male",
        location: "Jounieh",
        breed: "Mixed Breed",
        traits: ["Vaccinated", "Enjoys playtime", "Loves company"]
    },

    // Fictional demo data for the course project.
    {
        id: 13,
        type: "rabbit",
        name: "Biscuit & Cotton",
        age: "4 months each",
        description: "Must Be Adopted Together",
        image: PetCard13,
        emoji: "🐰🐰",
        subtitle: "4 months each • Must Be Adopted Together",
        fullDescription: "Biscuit and Cotton are a bonded pair of rabbits who enjoy exploring and resting side by side. They must be adopted together into the same caring home, with plenty of space to hop around and daily attention.",
        gender: "Two Males",
        location: "Tyre",
        breed: "Mixed Breed Rabbits",
        traits: ["Must be adopted together", "Curious and playful", "Enjoy exploring"]
    },

    // Fictional demo data for the course project.
    {
        id: 14,
        type: "bird",
        name: "Charlie",
        age: "5 years",
        description: "Curious Feathered Friend",
        image: PetCard14,
        emoji: "🦜",
        subtitle: "5 years old • Curious Feathered Friend",
        fullDescription: "Charlie is a curious African grey parrot who enjoys company, puzzle toys, and daily interaction. He is looking for an experienced caregiver who can provide a spacious environment, regular enrichment, and long-term companionship.",
        gender: "Male",
        location: "Beirut",
        breed: "African Grey Parrot",
        traits: ["Enjoys interaction", "Loves puzzle toys", "Curious and playful"]
    },

    // Fictional demo data for the course project.
    {
        id: 15,
        type: "cat",
        name: "Amber",
        age: "2 years",
        description: "Sweet Ginger Companion",
        image: PetCard15,
        emoji: "🐱",
        subtitle: "2 years old • Sweet Ginger Companion",
        fullDescription: "Amber is a sweet ginger cat who enjoys exploring and relaxing in cozy corners. She is looking for a loving family who will give her a welcoming home, daily attention, and plenty of companionship.",
        gender: "Female",
        location: "Batroun",
        breed: "Domestic Shorthair",
        traits: ["Vaccinated", "Enjoys exploring", "Loves cozy resting spots"]
    },

    // Fictional demo data for the course project.
    {
        id: 16,
        type: "hamster",
        name: "Mochi",
        age: "4 months",
        description: "Little Fluffy Explorer",
        image: PetCard16,
        emoji: "🐹",
        subtitle: "4 months old • Little Fluffy Explorer",
        fullDescription: "Mochi is a curious little hamster who enjoys exploring tunnels, burrowing, and resting in cozy hideouts. He is looking for a caring owner who can provide a spacious enclosure, deep bedding, and daily attention.",
        gender: "Male",
        location: "Byblos",
        breed: "Dwarf Hamster",
        traits: ["Curious and active", "Enjoys burrowing", "Loves hideouts"]
    }
];

const petTypes = [
    { label: "All Pets", value: "all" },
    { label: "Cats", value: "cat" },
    { label: "Dogs", value: "dog" },
    { label: "Birds", value: "bird" },
    { label: "Rabbits", value: "rabbit" },
    { label: "Hamsters", value: "hamster" }
];

const Pets = ({ addedPets = [], requestedPetId = null, onPetRequestConsumed, favourites = [], onToggleFavourite }) => {
    const [selectedPet, setSelectedPet] = useState(null);
    const [selectedType, setSelectedType] = useState("all");

    useEffect(() => {
        if (requestedPetId === null) {
            return;
        }

        const requestedPet = [...pets, ...addedPets].find((pet) => pet.id === requestedPetId);
        setSelectedPet(requestedPet || null);
        if (!requestedPet) {
            setSelectedType("all");
        }
        onPetRequestConsumed();
    }, [requestedPetId, addedPets, onPetRequestConsumed]);

    const allPets = [...pets, ...addedPets];
    const filteredPets = allPets.filter((pet) =>
        selectedType === "all" || pet.type === selectedType
    );

    if (selectedPet) {
        return <PetDetails pet={selectedPet} onBack={() => setSelectedPet(null)} />;
    }


    return (
        <div className="pets-listing-page">
            <div className="pets-listing-heading text-center">
                <h2>Adopt a Friend</h2>
            </div>

            <div className="pets-section pb-5">

                <div className="container">

                    <div className="pets-filter" role="group" aria-label="Filter by animal type">
                        {petTypes.map((type) => (
                            <button
                                key={type.value}
                                type="button"
                                className="pets-filter-button"
                                aria-pressed={selectedType === type.value}
                                onClick={() => setSelectedType(type.value)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>

                    <div className="row">

                        {filteredPets.length === 0 ? (
                            <p className="text-center">No pets found for this type.</p>
                        ) : filteredPets.map((pet) => (

                            <div
                                key={pet.id}
                                className="col-md-4 mb-4 d-flex"
                            >

                                <div className="card pet-card">

                                    <div className="pet-card-photo">
                                        {pet.image ? (
                                            <img
                                                src={pet.image}
                                                className={`card-img-top pet-card-image-${pet.id}`}
                                                alt={pet.name}
                                            />
                                        ) : (
                                            <p className="pet-card-no-image">No image provided</p>
                                        )}
                                    </div>

                                    <div className="card-body text-center">

                                        <h5 className="card-title">{pet.name}</h5>

                                        <p className="card-text">
                                            {pet.age} • {pet.description}
                                        </p>

                                        <div className="pet-card-actions">
                                            <button
                                                type="button"
                                                className="pet-favourite-button"
                                                aria-label={`${favourites.includes(pet.id) ? "Remove" : "Add"} ${pet.name} ${favourites.includes(pet.id) ? "from" : "to"} favourites`}
                                                aria-pressed={favourites.includes(pet.id)}
                                                onClick={() => onToggleFavourite(pet.id)}
                                            >
                                                {favourites.includes(pet.id) ? <Favorite aria-hidden="true" /> : <FavoriteBorder aria-hidden="true" />}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setSelectedPet(pet)}
                                                className="btn btn-main"
                                            >
                                                Adopt Me
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Pets;
