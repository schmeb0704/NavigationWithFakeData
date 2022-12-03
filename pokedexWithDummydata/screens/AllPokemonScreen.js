import {View, Text, FlatList, StyleSheet} from "react-native"
import { POKEDATA } from "../data/pokeData"
import Card from "../components/Card"

export default function AllPokemonScreen({navigation}){

  function goToPage(){
    navigation.navigate("SpecificPokemon")
  }

  function renderPokemon(itemData){
    const {name, sprite} = itemData.item
    return <Card name={name} image={sprite} pressMe = {goToPage}/>
  }

  return(
    <View>
      <View style={styles.listContainer}>
        <FlatList 
          data={POKEDATA}
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
    margin: 10
  }
})