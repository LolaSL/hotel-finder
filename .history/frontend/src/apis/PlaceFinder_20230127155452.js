import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/api/v1/places",
  withCredentials: true 
});