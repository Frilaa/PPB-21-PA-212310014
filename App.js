import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ItemTypograp } from "./src/components/ItemTypograp";
import { ImageItem } from "./src/components/ImageItem";
import Nomor3 from "./src/components/Nomor3";
import Nomor4RCC from "./src/components/Nomor4RCC";
import Nomor4RFC from "./src/components/Nomor4RFC";
import Nomor2 from "./src/components/Nomor2";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Nomor2 />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});