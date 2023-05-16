import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootContextApi from "./home/rootContext";
const Context = ({ children }) => {
  return (
    <BrowserRouter>
      <RootContextApi>{children}</RootContextApi>
    </BrowserRouter>
  );
};

export default Context;
