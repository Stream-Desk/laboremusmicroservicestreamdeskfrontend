import axios from "axios";

export default axios.create({
  baseURL:
    "https://streamdeskticketmicroservice.herokuapp.com/swagger/index.html",
  headers: {
    "content-type": "application/json",
  },
});
