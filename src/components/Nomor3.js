import React from "react";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const Nomor3 = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png",
            }} 
            style={styles.image}/>
        </View>
        <View style={styles.text}>
            <Text style={{color: "white"}}>Loading ...</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#660066",
        width: 400,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 95,
        height: 95
    },
    text: {
        backgroundColor: "#660066",
        alignItems: "center",
        padding: 50
    }
});

export default Nomor3;