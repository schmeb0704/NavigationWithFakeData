import { TYPES } from "../data/pokeData";
import {View, Text, FlatList, StyleSheet} from "react-native"
import TextOnlyCard from "../components/TextOnlyCard";

export default function TypesScreen({navigation}){
  function renderMe(itemData){

    function goToAllPokemonPage(){
      navigation.navigate("AllPokemon", {
        pokeType: type
      })
    }

    const {type, color} = itemData.item
    return <TextOnlyCard type={type} color={color} pressMe={goToAllPokemonPage}  />
  }

  return(
    <FlatList
      data={TYPES}
      keyExtractor={item => item.type}
      renderItem={renderMe}
      numColumns={2}
    />
  )
}