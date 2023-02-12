import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Place = (props) => {
  const {  id, title, description} = props;

  
  return (
    <Card className="shadow border">
      <Link to={`/place/${id}`}>
        <img src="/images/16.jpg" className="card-img" alt="Holland in spring" />
      </Link>
      <Card.Body>
        <Link to={`/place/${id}`}>
          <Card.Title> {title}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
        <Link to={`/place/${id}`}><Button >View more</Button></Link
      </Card.Body>
    </Card>
  );
};

export default Place;