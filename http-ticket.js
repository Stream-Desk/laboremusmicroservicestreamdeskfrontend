import axios from "axios";

export default axios.create({
  baseURL: "https://streamdeskticketmicroservice.herokuapp.com",
  headers: {
    "content-type": "application/json",
  },

  method: "POST",
});
