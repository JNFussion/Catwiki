import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breed from "./components/Breed";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:id" element={<Breed />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
