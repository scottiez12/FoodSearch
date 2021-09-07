import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //so price is either === "$" or "$$" etc
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ResultsList
        results={filterResultsByPrice("$")}
        headerText="Cost Effective"
      />
      <ResultsList
        results={filterResultsByPrice("$$")}
        headerText="Little bit of money"
      />
      <ResultsList results={filterResultsByPrice("$$$")} headerText="Pricey!" />
      <ResultsList
        results={filterResultsByPrice("$$$$")}
        headerText="High Rollers!!"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
