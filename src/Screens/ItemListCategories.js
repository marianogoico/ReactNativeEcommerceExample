import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import allProducts from "../Data/products.json"
import ItemProduct from '../Components/ItemProduct'

const ItemListCategories = ({category}) => {

  const [keyWord, setKeyWord] = useState("")
  const [productsFiltered, setProductsFiltered] = useState(allProducts)

  useEffect(() => {
    if(category){
      const productsCategory = allProducts.filter(prod => prod.category === category)
      const productsFiltered = productsCategory.filter(prod => prod.title.includes(keyWord))
      setProductsFiltered(productsFiltered)
    }
  }, [keyWord])

  return (
    <>
      <Header/>
      <Search keyWord={keyWord} setKeyWord = {setKeyWord}/>
      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ItemProduct item={item}/>}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"100%", 
  }
})

export default ItemListCategories

