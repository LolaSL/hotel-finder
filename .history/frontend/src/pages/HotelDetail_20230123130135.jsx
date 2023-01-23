import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {HotelsContext } from "../context/HotelsContext";
import HotelFinder from "../apis/HotelFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedHotel, setSelectedHotel} = useContext(
   HotelsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HotelFinder.get(`/${id}`);
        console.log(response);

        setSelectedHotel(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, setSelectedHotel]);
  return (
    <div>
      {selectedHotel && (
        <>
          <h1 className="text-center display-1">
            {selectedHotel.restaurant.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedHotel.restaurant.average_rating} />
            <span className="text-warning ml-1">
              {selectedHotel.restaurant.count
                ? `(${selectedHotel.restaurant.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;