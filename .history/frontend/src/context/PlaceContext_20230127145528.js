import React, { useState, createContext, useEffect } from "react";
import PlaceService from '../services/place.service';

export const PlaceContext = createContext();

export const PlaceContextProvider = ({ children }) => {
    const [places, setPlaces] = useState(null);
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
          setPlaces,isLoading, setIsLoading,
           selectedPlace,
          setSelectedPlace,
        }}
      >
        {props.children}
      </PlaceContext.Provider>
    );
  };