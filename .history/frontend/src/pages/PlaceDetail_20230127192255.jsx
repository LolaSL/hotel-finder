import React, { useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import { PlaceContextProvider } from '../context/PlaceContext';
import PlaceFinder from '../apis/PlaceFinder';
import Container from 'react-bootstrap/Container';

const PlaceDetail = (props) => {
  const { id } = useParams();

[places, setPlaces] = useContext(PlaceContextProvider)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get(`/${id}`);
        console.log(response);
        setPlaces(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Container className="container">
    <div>
      {selectedPlace && (
        <>
          <h1 className="text-center display-1">{selectedPlace.hotel.name}</h1>
          <div className="text-center">
        
      
          </div>
          <div className="mt-3">
           
          </div>
       
        </>
      )}
      </div>
    </Container>
  )
}

export default PlaceDetail