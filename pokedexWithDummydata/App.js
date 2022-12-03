import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPokemonScreen from './screens/AllPokemonScreen';
import IndPokemonScreen from "./screens/IndPokemonScreen"
import TypesScreen from './screens/TypesScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Types" component={TypesScreen} />
          <Stack.Screen name='AllPokemon' component={AllPokemonScreen} options={{title: "All Pokemon"}}/>
          <Stack.Screen name='SpecificPokemon' component={IndPokemonScreen} options={({route}) => ({title: route.params.pokeName})}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75
  },
});
