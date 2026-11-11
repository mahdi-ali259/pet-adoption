import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pets, { pets } from "./pages/Pets";
import FavouritesDrawer from "./components/FavouritesDrawer";
import AddPet from "./pages/AddPet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";

const App = () => {
  const [addedPets, setAddedPets] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [requestedPetId, setRequestedPetId] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  const favouritePets = [...pets, ...addedPets].filter((pet) => favourites.includes(pet.id));

  const handleToggleFavourite = (id) => {
    setFavourites((previousFavourites) =>
      previousFavourites.includes(id)
        ? previousFavourites.filter((petId) => petId !== id)
        : [...previousFavourites, id]
    );
  };

  const handlePetRequest = (id) => {
    setRequestedPetId(id);
  };

  const handlePetRequestConsumed = () => {
    setRequestedPetId(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleAddPet = (pet) => {
    setAddedPets((previousPets) => [
      ...previousPets,
      { ...pet, id: `added-${previousPets.length + 1}` }
    ]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {isLoggedIn ? (
          <>
            <ScrollToTop />
            <Navbar
              favouritesCount={favourites.length}
              isFavouritesOpen={isFavouritesOpen}
              onOpenFavourites={() => setIsFavouritesOpen(true)}
            />
            <main className="flex-grow-1 back">
              <Routes>
                <Route path="/" element={<Home
                  onSelectPet={handlePetRequest}
                  favourites={favourites}
                  onToggleFavourite={handleToggleFavourite}
                />} />
                <Route path="/about" element={<About />} />
                <Route path="/pets" element={
                  <Pets
                    favourites={favourites}
                    onToggleFavourite={handleToggleFavourite}
                    addedPets={addedPets}
                    requestedPetId={requestedPetId}
                    onPetRequestConsumed={handlePetRequestConsumed}
                  />
                } />
                <Route path="/addpet" element={<AddPet onAddPet={handleAddPet} />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <FavouritesDrawer
              isOpen={isFavouritesOpen}
              onOpenChange={setIsFavouritesOpen}
              pets={favouritePets}
              onRemove={handleToggleFavourite}
              onSelectPet={handlePetRequest}
            />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
