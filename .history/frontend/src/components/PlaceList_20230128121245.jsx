import React, {useContext, useState, useEffect} from 'react';
import {PlaceContext} from "../context/PlaceContext";
import {Row} from "react-bootstrap";
import Place from "./Place";

const PlaceList =() => {
    const { place } = useContext(PlaceContext);
    const [loading, setLoading] = useState(true);

    
    return (
        <Row className="d-flex">
            {place.places.map(place =>
                <Place key={place.id} place={place}/>
            )}
        </Row>
    );
};

export default PlaceList;