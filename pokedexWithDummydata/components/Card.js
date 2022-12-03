import {View, Text, Image, StyleSheet, Pressable} from "react-native"

export default function Card(props){
  const {name, image, pressMe} = props
  return(
    <View style={styles.container}>
      <Pressable 
        onPress={pressMe}
      >
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.imageHolder}>
          <Image 
            source={{uri: image}}
            style={styles.image}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  imageHolder:{
    height: 150,
    width: 200
  },
  image:{
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  }, 
  container:{
    alignItems: "center",
    flex: 1,
    margin: 16,
    height: 150,
  },
  name:{
    textTransform: "capitalize"
  }
})
