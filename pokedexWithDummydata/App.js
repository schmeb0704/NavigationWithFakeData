import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPokemonScreen from './screens/AllPokemonScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AllPokemonScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75
  },
});
