import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onSearchTermSubmit={() => {
          console.log("this would be the api call");
        }}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
