import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.featherIconStyle} />
      <TextInput
        value={term}
        onChangeText={(newSearchTerm) => onSearchTermChange(newSearchTerm)}
        placeholder="Search"
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => {
          onSearchTermSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#9F9E9F",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  featherIconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
