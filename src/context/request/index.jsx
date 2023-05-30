import React, { createContext, useState } from "react";

export const RequestContext = createContext();

const RequestApi = ({ children }) => {
  const [res, setRes] = useState([]);
  return (
    <RequestContext.Provider value={[res, setRes]}>
      {children}
    </RequestContext.Provider>
  );
};

export default RequestApi;
