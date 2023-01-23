
import React, { useState } from "react";
import HotelFinder from "../apis/HotelFinder";
import { useLocation, useParams, useNavigate} from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(id);

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const response = await HotelFinder.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      }); console.log(response);
      navigate("/");
     navigate(location.pathname);
    } catch (err) {console.log(err.message)}
  };
  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name" className="mb-2 fw-bold ">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control w-100"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating" className="mb-2 mt-2 me-2 fw-bold">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Review" className="mb-2 mt-2 me-2 fw-bold">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            className="form-control w-55 mb-2"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;