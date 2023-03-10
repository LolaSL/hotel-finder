import React, {
  useEffect,
  // useContext
} from "react";
import HotelFinder from "../apis/HotelFinder";
// import { HotelsContext } from "../context/HotelsContext";
import { useNavigate, useReducer } from "react-router-dom";
import StarRating from "./StarRating";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
switch (action.type) {
  case "FETCH_REQUEST":
    return { ...state, loading: true };
  case "FETCH_SUCCESS":
    return { ...state, hotels: action.payload, loading: false };
  case "FETCH_FAIL":
    return { ...state, loading: false, error: action.payload };
  default:
    return state;
}
};
const HotelList = (props) => {
  const [{ loading, error, hotels }, dispatch] = useReducer(reducer, {
    hotels: [],
    loading: true,
    error: "",
  });
  // const { hotels, setHotels } = useContext(HotelsContext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await HotelFinder.get("/");
  //       console.log(response.data.data);
  //       setHotels(response.data.data.hotels);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, [setHotels]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await HotelFinder.get("/");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await HotelFinder.delete(`/${id}`);
      setHotels(
        hotels.filter((hotel) => {
          return hotel.id !== id;
        })
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/hotels/${id}/update`);
  };

  const handleHotelSelect = (id) => {
    navigate(`/hotels/${id}`);
  };

  const renderRating = (hotel) => {
    if (!hotel.count) {
      return <span className="count">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={hotel.average_rating} />
        <span className="count ml-1">({hotel.count})</span>
      </>
    );
  };

  return (
    <table className="table table-hover text-white border ">
      <thead>
        <tr className=" table">
          <th scope="col">Hotel</th>
          <th scope="col">Location</th>
          <th scope="col">Price Range</th>
          <th scope="col">Ratings</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {hotels &&
          hotels.map((hotel, index) => {
            return (
              <tr onClick={() => handleHotelSelect(hotel.id)} key={index} data-testid="row">
                <td>{hotel.name}</td>
                <td>{hotel.location}</td>
                <td>{"$".repeat(hotel.price_range)}</td>
                <td>{renderRating(hotel)}</td>
                <td>
                  <Button
                    onClick={(e) => handleUpdate(e, hotel.id)}
                    className="btn btn-warning"
                    size="sm"
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={(e) => handleDelete(e, hotel.id)}
                    className="btn btn-danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default HotelList;
