import React, { useEffect, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import { HotelsContext } from "../context/HotelsContext";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container;"



const PlaceList = () => {

    const { hotels, setHotels } = useContext(HotelsContext);
    let navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await HotelFinder.get("/");
          console.log(response.data.data);
          setHotels(response.data.data.hotels);
        } catch (err) {}
      };
  
      fetchData();
    }, [setHotels]);
  
  
    const handleHotelSelect = (id) => {
      navigate(`/hotels/${id}`);
    };
    return (
          <Container>
        <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
        <div className="products">
         
            <Row>
              {places.map((place) => (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3 pt-2">
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
            </div>
        </Container>
    );
  };
  

export default PlaceList