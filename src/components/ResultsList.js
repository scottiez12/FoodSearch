import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ headerText, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
