import React from 'react'

const PlaceDetail = (props) => {
  const { place } = props;
  return (
    <div>
      <h1>{place.title}</h1></div>
  )
}

export default PlaceDetail