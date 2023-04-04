import React from "react";
import { View, Text, StyleSheet} from "react-native";

const ItemTypograp = () => {
  return (
    <View style={styles.box}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
          
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragrapf}>
        A Bicycle, Also Called a pedal cycle, bike, push-bike, or cycle, is a 
        human-powered or motor powered assisted, single-track vehicle having 
        two wheels attached to a frame, one behind the other. A bicycle rider 
        is called a cyclist or bicyclist
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
    padding: 10,
    margin: 5
  },
  box: {
    width: 250,
    borderWidth:1
  },
});

export { ItemTypograp };