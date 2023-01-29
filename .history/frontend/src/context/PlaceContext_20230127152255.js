import React, { useState, createContext,  useContext, useEffect } from "react";
import PlaceService from '../services/place.service';

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ children }) => {
    const [places, setPlaces] = useState();
    const [selectedPlace, setSelectedPlace] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    PlaceService.getPlaces().then((response) => {
      setPlaces(response.data);
      setIsLoading(false);
    });
  }, []);

    return (
      <PlaceContext.Provider
        value={{
          places,
          setPlaces,
          isLoading,
          setIsLoading,
           selectedPlace,
          setSelectedPlace,
        }}
      >
        {children}
      </PlaceContext.Provider>
    );
};
  
const usePlace = () => {
  const context = useContext(PlaceContext);
  if (context === undefined) {
    throw new Error("usePlace must be used within a PlaceProvider");
  }
  return context;
};

export {usePlace};