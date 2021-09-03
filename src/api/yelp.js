import React from "react";
import axios from "axios";
const keys = require("../../config/keys");

//details
//"https://api.yelp.com/v3/businesses/{id}"
//search all
//"https://api.yelp.com/v3/businesses/Search"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${keys.YelpApiKey}`,
  },
});
