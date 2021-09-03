import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //for api
  const [results, setResults] = useState([]);

  //request
  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 20,
        term: searchTerm,
        location: "st louis",
      },
    });
    setResults(response.data.businesses);
    // console.log(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
