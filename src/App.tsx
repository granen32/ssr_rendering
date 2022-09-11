import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// pages
import Blue from "./components/pages/Blue";
import Red from "./components/pages/Red";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </>
  );
}

export default App;
