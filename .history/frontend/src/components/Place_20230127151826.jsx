import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import PlaceService from "../services/place.service";
import PlcaFin
import { useParams } from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState([])
  useEffect(() =>{
    async function fetchProduct() {
        const { data } =  await PlaceService.get(`/${id}`)
        setPlace(data)
    }
    fetchProduct()

},[id])
  // const place = useSelector(state =>
  //   state.places.find(place => place.id === placeId)
  // )
  if (!place) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  
  return (
    <Card className="shadow border">
     
        <img src={place.image_url1} className="card-img" alt={place.title} />
    
      <Card.Body>
      
          <Card.Title> {place.title}</Card.Title>
  
        <Card.Text>{place.description}</Card.Text>
        <Link to={`/place/:id`}><Button >View more</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Place;
