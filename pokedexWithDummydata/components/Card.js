import {View, Text, Image, StyleSheet} from "react-native"

export default function Card(props){
  const {name, image} = props
  return(
    <View>
      <View>
        <Text>{name}</Text>
      </View>
      <View style={styles.imageHolder}>
        <Image 
          source={{uri: image}}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageHolder:{
    height: 150,
    width: 200
  },
  image:{
    flex: 1,
    resizeMode: "contain"
  }
})
