import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Close, FavoriteBorder } from "@mui/icons-material";

const FavouritesDrawer = ({ isOpen, onOpenChange, pets, onRemove, onSelectPet }) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const openingControl = document.activeElement;
    const drawer = document.getElementById("favourites-drawer");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawer.querySelector("button").focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
      }

      if (event.key === "Tab") {
        const controls = drawer.querySelectorAll("button:not(:disabled), a[href]");
        const first = controls[0];
        const last = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        } else if (!drawer.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (openingControl && openingControl.isConnected) {
        openingControl.focus();
      }
    };
  }, [isOpen, onOpenChange]);

  if (!isOpen) {
    return null;
  }

  const handleOpenPet = (id) => {
    onSelectPet(id);
    onOpenChange(false);
  };

  return (
    <div className="favourites-backdrop" onClick={() => onOpenChange(false)}>
      <aside
        id="favourites-drawer"
        className="favourites-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="favourites-heading"
        aria-describedby="favourites-count"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="favourites-drawer-header">
          <div>
            <h2 id="favourites-heading">Favourites</h2>
            <p id="favourites-count" aria-live="polite">{pets.length} saved {pets.length === 1 ? "pet" : "pets"}</p>
          </div>
          <button type="button" className="favourites-close" aria-label="Close favourites" onClick={() => onOpenChange(false)}>
            <Close aria-hidden="true" />
          </button>
        </div>

        <div className="favourites-drawer-content">
          {pets.length === 0 ? (
            <div className="favourites-empty">
              <FavoriteBorder aria-hidden="true" />
              <p>Your favourites are waiting for a little love.</p>
              <Link to="/pets" className="btn btn-main" onClick={() => handleOpenPet("all")}>
                Explore Pets
              </Link>
            </div>
          ) : (
            <ul className="favourites-list">
              {pets.map((pet) => (
                <li key={pet.id} className="favourites-item">
                  {pet.image ? (
                    <img src={pet.image} alt={pet.name} />
                  ) : (
                    <span className="favourites-no-image">No image</span>
                  )}
                  <div className="favourites-item-info">
                    <Link to="/pets" className="favourites-pet-link" onClick={() => handleOpenPet(pet.id)} aria-label={`View ${pet.name}'s details`}>
                      {pet.name}
                    </Link>
                    <p>{pet.age}{pet.type && ` • ${pet.type}`}</p>
                  </div>
                  <button type="button" className="favourites-remove" aria-label={`Remove ${pet.name} from favourites`} onClick={(event) => {
                    onRemove(pet.id);
                    // Keep focus inside the drawer when this item disappears.
                    event.currentTarget.closest("aside").querySelector(".favourites-close").focus();
                  }}>
                    <Close aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
};

export default FavouritesDrawer;
