import {View, Text, FlatList, StyleSheet} from "react-native"
import { POKEDATA } from "../data/pokeData"
import Card from "../components/Card"

export default function AllPokemonScreen({navigation}){

  

  function renderPokemon(itemData){

    function goToPage(){
      navigation.navigate("SpecificPokemon", {
        pokeName : name 
      })
    }
    
    const {name, sprite} = itemData.item
    return <Card name={name} image={sprite} pressMe = {goToPage}/>
  }

  return(
    <View style={styles.listContainer}>
      <View >
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
    marginTop: 10,
    flex: 1 
  }
})