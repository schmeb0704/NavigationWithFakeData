import {View, Text, FlatList, StyleSheet} from "react-native"
import { POKEDATA } from "../data/pokeData"
import Card from "../components/Card"
import { Pokemon } from "../models/pokemonConstructor"

export default function AllPokemonScreen({navigation, route}){

  const typeId = route.params.pokeType

  function renderPokemon(itemData){
    function goToPage(){
      navigation.navigate("SpecificPokemon", {
        pokeName : name 
      })
    }
    const {name, sprite} = itemData.item
    return <Card name={name} image={sprite} pressMe = {goToPage}/>
  }

  function checkType(){
    return typeId === Pokemon.type
  }

  const specType = POKEDATA.filter(checkType)

  console.log(typeId)
  console.log(specType)

  
  return(
    <View style={styles.listContainer}>
      <View >
        <FlatList 
          data={specType}
          keyExtractor={item => item.dexNum}
          renderItem={renderPokemon}
          numColumns={2}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer:{
    marginTop: 10,
    flex: 1 
  }
})