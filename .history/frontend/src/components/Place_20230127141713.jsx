import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from '../apis/PlaceFinder';
// import { PlacesContext } from "../context/PlacesContext";


const Place = () => {
  const handleSubmit = async (e) => {
    // e.preventDefault();
      try {
        const response = await HotelFinder.post("/", {
          name,
          location,
          price_range: priceRange,
        });
        addHotels(response.data.data.hotel);
      } catch (err) {
        console.log(err.message);
      }
  };
  return (
    <Card className="shadow border">
      <Link to={`/place/:id`}>
        <img src={props.image_url1} className="card-img" alt={props.title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {props.title}</Card.Title>
        </Link>
        <Card.Text>{props.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;
