import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootContextApi from "./home/rootContext";
import RequestApi from "./request";
const Context = ({ children }) => {
  return (
    <BrowserRouter>
      <RootContextApi>
        <RequestApi>{children}</RequestApi>
      </RootContextApi>
    </BrowserRouter>
  );
};

export default Context;
