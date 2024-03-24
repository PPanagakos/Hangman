import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

export const useView = () => useContext(ViewContext);

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState("main");

  const navigate = (newView) => {
    setView(newView);
  };

  return (
    <ViewContext.Provider value={{ view, navigate }}>
      {children}
    </ViewContext.Provider>
  );
};
