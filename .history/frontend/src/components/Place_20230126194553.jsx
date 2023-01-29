import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Place = ( place ) => {
  
  return (
    <Card className="shadow border">
      <Link to={`/place/:id`}>
        <img src={place.image_url1} className="card-img" alt={place.title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {place.title}</Card.Title>
        </Link>
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;
