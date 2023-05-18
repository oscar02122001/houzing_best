import React from "react";
import "../index.css";
import { Navigate, Route, Routes } from "react-router-dom";

import navbar from "../utils/navbar";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbar.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.element} />
          );
        })}
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default Root;
