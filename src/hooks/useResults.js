import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  //for api
  const [results, setResults] = useState([]);
  //for error handling
  const [errorMessage, setErrorMessage] = useState("");

  //request
  const searchApi = async (initialSearchTerm) => {
    console.log("api search 1 time");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 25,
          term: initialSearchTerm,
          location: "st louis",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong try again later.");
    }
    // console.log(response.data.businesses);
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};
