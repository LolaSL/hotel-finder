import React from 'react';
import AddHotel from '../components/AddHotel';
import HotelList from "../components/HotelList";

const Home = () => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">
        Hotel Finder
      </h1>
      <AddHotel />
      <HotelList
    </div>
  )
}

export default Home;