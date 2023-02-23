const { Router } = require('express')
const {
 getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  removeHotel,
  addReview,
  removeReview
} = require('../controllers/hotel.js')

const hotelRouter = Router()

hotelRouter.get("/",  getHotels);
hotelRouter.get('/:id', getHotelById);
hotelRouter.post('/', createHotel);
hotelRouter.put('/:id', updateHotel);
hotelRouter.delete('/:id', removeHotel);
hotelRouter.post("/:id/addReview", addReview);
hotelRouter.delete("/:id/removeReview", remoReview);

module.exports = hotelRouter;
