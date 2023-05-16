import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const RootContext = createContext();

const RootContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <RootContext.Provider value={[state, dispatch]}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextApi;
