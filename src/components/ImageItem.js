import React from "react";
import { View, Image } from "react-native";

const ImageItem = () => {
  return (
    <View style={{backgroundColor:"#ccffff", width: 150, height: 150, alignItems: "center"}}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/146/146005.png",
        }}
        style={{
          width: 120,
          height: 120,
          margin: 15
        }}
      />
    </View>
  );
};

export { ImageItem };