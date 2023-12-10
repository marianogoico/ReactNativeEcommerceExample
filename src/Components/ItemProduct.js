import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemProduct = ({item}) => {
  return (
    <View style={styles.container}>
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
        borderRadius:5
    },
    text:{

    }
})