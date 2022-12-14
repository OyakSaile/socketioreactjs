import React, { createContext, ReactNode, useContext, useState } from "react";

interface LoadingContextData {
  isLoading: boolean;
  Loading: {
    turnOff: () => void;
    turnOn: () => void;
  };
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const turnOff = () => {
    setIsLoading(false);
  };

  const turnOn = () => {
    setIsLoading(true);
  };

  const Loading = {
    turnOff,
    turnOn,
  };

  return (
    <LoadingContext.Provider value={{ isLoading, Loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);

export { LoadingProvider, useLoading };
