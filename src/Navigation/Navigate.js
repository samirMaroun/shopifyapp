import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "../Screens/Login";
import ArtistSearch from "../Screens/ArtistSearch";
import ArtistAlbums from "../Screens/ArtistAlbums";
const Navigate = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ArtistSearch" element={<ArtistSearch />} />
        <Route path="/albums" element={<ArtistAlbums />} />
      </Routes>
    </Router>
  );
};

export default Navigate;
