import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import allProducts from "../Data/products.json"
import { colors } from '../Global/colors'

const ItemDetail = ({route}) => {
  const {id} = route.params
  const [product, setProduct] = useState({})

  useEffect(()=> {
    const productFinded = allProducts.find(product => product.id === id)
    setProduct(productFinded)
  }, [id])

  return (
    <View style = {styles.container}>
      <Image
        style={styles.image}
        source = {{uri:product.thumbnail}}
        resizeMode='cover'
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.containerPrice}>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable style={styles.button}>
          <Text>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.green1,
      padding:2,
      paddingStart:40,
    },
    containerText:{
      gap:15,
      alignItems:"center",
      padding:15
    },
    title:{
      fontSize:20,
      fontWeight:"bold"
    },
    price:{
      fontSize:40
    },
    button:{
      backgroundColor:colors.green1,
      borderRadius:5,
      justifyContent:"center",
      paddingVertical:10,
      paddingHorizontal:20,     
    },
    containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
    }
})