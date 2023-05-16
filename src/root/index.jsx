import React from "react";
import "../index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Properties from "../components/properties";


const Root = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default Root;
