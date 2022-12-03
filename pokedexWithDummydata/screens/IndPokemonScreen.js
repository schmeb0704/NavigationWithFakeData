import {View, Text, Image, FlatList, StyleSheet} from "react-native"


export default function InPokemonScreen({route}){
  const name = route.params.pokeName
  return(
    <View>
      <Text>Pokemon Name {name}</Text>
    </View>
  )
}