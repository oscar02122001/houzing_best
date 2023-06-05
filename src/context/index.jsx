import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootContextApi from "./home";
import FavouriteContextApi from "./home";
const Context = ({ children }) => {
  return (
    <BrowserRouter>
      <RootContextApi>
        <FavouriteContextApi>{children}</FavouriteContextApi>
      </RootContextApi>
    </BrowserRouter>
  );
};

export default Context;
