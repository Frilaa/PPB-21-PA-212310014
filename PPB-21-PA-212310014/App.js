import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ImageBackground } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 36}}>
       <Text style={styles.headingText}>My profile</Text>
      </View>

      <View style={styles.container}>
      <Image
          style={styles.gambar}
          source={require('./assets/woman.png')}> 
       </Image>
      </View>

      <View style={{alignItems: "center", flex: 2}}>
        <Text style={styles.headingText}>Frila Cahya Wardani</Text>
        <Text style={styles.headingText}>TI - 21 - PA</Text>
        <Text style={styles.headingText}>212310014</Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#336666',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingText: {
    color: '#ffffff',
    alignItems: 'center',
    fontSize: 17,
    margin: 11,
  },

  gambar: {
    width: 126,
    height: 126,
  },

});
