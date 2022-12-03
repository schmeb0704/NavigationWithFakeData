import {View, Text, Image, FlatList, StyleSheet} from "react-native"
import { POKEDATA } from "../data/pokeData"
import Card from "../components/Card"

export default function AllPokemonScreen(){

  function renderPokemon(itemData){
    const {name, sprite} = itemData.item
    return <Card name={name} image={sprite} />
  }

  return(
    <View>
      <FlatList 
        data={POKEDATA}
        keyExtractor={item => item.dexNum}
        renderItem={renderPokemon}
        numColumns={2}
      />
    </View>
  )
}