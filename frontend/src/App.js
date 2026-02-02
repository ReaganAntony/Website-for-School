import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Gallery from "@/pages/Gallery";
import Notice from "@/pages/Notice";
import Contact from "@/pages/Contact";
import SportsDay from "@/pages/gallery/SportsDay";
import AnnualDay from "@/pages/gallery/AnnualDay";
import StudentsClassrooms from "@/pages/gallery/StudentsClassrooms";
import CulturalEvents from "@/pages/gallery/CulturalEvents";
import Activities from "@/pages/gallery/Activities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/sports-day" element={<SportsDay />} />
          <Route path="/gallery/annual-day" element={<AnnualDay />} />
          <Route path="/gallery/students-classrooms" element={<StudentsClassrooms />} />
          <Route path="/gallery/cultural-events" element={<CulturalEvents />} />
          <Route path="/gallery/activities" element={<Activities />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
