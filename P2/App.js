import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Bicycle from './src/component/Bicycle';
import Car from './src/component/Car';
import Motorcycle from './src/component/Motorcycle';
import Student from './src/component/Student';


export default function App() {
  return (
    <ScrollView style={{marginTop: 50}}>
        <Student />
    </ScrollView>
  );
}


