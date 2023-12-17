import { createContext } from "react";

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ initialValue, children }) => {
  return (
    <PortfolioContext.Provider value={initialValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContextProvider, PortfolioContext };
