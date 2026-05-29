import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Pet1 from "./pages/Pet1";
import Pet2 from "./pages/Pet2";
import Pet3 from "./pages/Pet3";
import AddPet from "./pages/AddPet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow-1 back">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pet1" element={<Pet1 />} />
        <Route path="/pet2" element={<Pet2 />} />
        <Route path="/pet3" element={<Pet3 />} />
        <Route path="/addpet" element={<AddPet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
