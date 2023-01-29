import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceFinder from '../apis/PlaceFinder';
// import { PlacesContext } from "../context/PlacesContext";


const Place = (props) => {
// const{image_url1, title, description} = props
  // const { places, setPlaces } = useContext(PlacesContext);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await PlaceFinder.get("/:id");
  //       console.log(response.data.data);
  //       setPlaces(response.data.data.places);
  //     } catch (err) {}
  //   };

  //   fetchData();
  // }, [setPlaces]);
  return (
    <Card className="shadow border">
      <Link to={`/place/:id`}>
        <img src={props.image_url1} className="card-img" alt={title} />
      </Link>
      <Card.Body>
        <Link to={`/place/:id`}>
          <Card.Title> {title}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;
