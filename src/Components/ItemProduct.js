import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'

const ItemProduct = ({item, navigation, route}) => {

  const {width, height} = useWindowDimensions()

  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("Product", {id:item.id})}>
      <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri:item.thumbnail}}/>
      <Text style={width>350 ? styles.text : styles.textMin}>{item.title}</Text>
    </Pressable>
  )
}

export default ItemProduct

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"gray",
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:0,
        paddingVertical:0,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",  
        gap:20,
    },
    text:{
      alignItems:"center",
      fontSize:15,
    },
    textMin:{
      alignItems:"center",
      fontSize:10,
    },
    image:{
      minWidth:80,
      height:80,
      width:"30%"
    }
})