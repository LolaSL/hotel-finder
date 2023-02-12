import React, { useState, useContext } from "react";
import HotelFinder from "../apis/HotelFinder";
import {HotelsContext } from "../context/HotelsContext";

const AddHotel = () => {
  const {addHotels } = useContext(HotelsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    // e.preventDefault();
      try {
        const response = await HotelFinder.post("/", {
          name,
          location,
          price_range: priceRange,
        });
        ser(response.data.data.hotel);
      } catch (err) {
        console.log(err.message);
      }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row d-flex">
          <div className="col me-2 w-35 d-flex">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col me-2 w-35 d-flex">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col me-2 d-flex">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select col w-35 me-2 my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary ml-4"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;