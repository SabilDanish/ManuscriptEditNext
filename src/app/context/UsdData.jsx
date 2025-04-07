import { createContext } from "react";

export const usdDataProvider = createContext();

export const UsdData = ({ children }) => {
  const biswaUsd = {
    name: "Biswa",
    age: "24",
  };
  return (
    <usdDataProvider.Provider value={biswaUsd}>
      {children}
    </usdDataProvider.Provider>
  );
};
