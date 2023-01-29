import React, { useState, createContext } from "react";

export const PlaceContext = createContext();

export const PlaceContextProvider = (props) => {
  const [places, setPlaces] = useState({});

  const [selectedPlace, setSelectedPlace] = useState([]);

  return (
    <PlaceContext.Provider
      value={{
        places,
        setPlaces,
        selectedPlace,
        setSelectedPlace,
      }}
    >
      {props.children}
    </PlaceContext.Provider>
  );
};