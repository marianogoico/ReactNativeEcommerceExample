import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemProduct = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri:item.thumbnail}}/>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default ItemProduct

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"gray",
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",  
        gap:20,
    },
    text:{
      alignItems:"center"
    },
    image:{
      width:50,
      height:50
    }
})