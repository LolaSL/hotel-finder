// import React, {  useEffect, useContext} from 'react';
// import { useParams } from "react-router-dom";
// import { PlaceContext } from '../context/PlaceContext';
// import PlaceFinder from '../apis/PlaceFinder';
// import Container from 'react-bootstrap/Container';

// const PlaceDetail = (
//   { title, image_url2, description }
// ) => {
//   const { id } = useParams();

// const [place, setPlace] = useContext(PlaceContext)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await PlaceFinder.get(`/${id}`);
//         console.log(response);
//         setPlace(response.data.place);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchData();
//   }, [id, setPlace]);
//   return (
//     <Container className="container">
//     <div>
//       {setPlace && (
//         <>
//           <h1 className="text-center display-1">{place?.title}</h1>
//           <div className="text-center">
//             <image src={place?.image_url2} alt={place?.title}/>
//               <article>{place.description}</article>
//           </div>
//           <div className="mt-3">

//           </div>

//         </>
//       )}
//       </div>
//     </Container>
//   )
// }

// export default PlaceDetail
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PlaceFinder } from "../apis/PlaceFinder";

const PlaceDetail = () => {
  const [place, setPlace] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PlaceFinder.get(`/${id}`);
        console.log(response);
        setPlace(response.data.place);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, setPlace]);
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={place.image_url2} />
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>{place.where_to_stay}</h3>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {place.description}
      </Row>{" "}
      <Button variant={"outline-dark"}>Добавить в корзину</Button>
    </Container>
  );
};

export default PlaceList;