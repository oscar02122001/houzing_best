import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const FavouriteContext = createContext();

const FavouriteApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <FavouriteContext.Provider value={[state, dispatch]}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteApi;
