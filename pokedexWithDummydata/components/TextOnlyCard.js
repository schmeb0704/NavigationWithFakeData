import {View, Text, Image, StyleSheet, Pressable} from "react-native"

export default function TextOnlyCard(props){
  const {type, color, pressMe} = props
  return(
    <View style={{backgroundColor: color, ...styles.container}}>
          <Pressable 
            onPress={pressMe}
            android_ripple={{color: "gray"}}
            style={styles.innerContainer}
           >
              <View>
                <Text>{type}</Text>
              </View>
          </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8
  },
  innerContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})