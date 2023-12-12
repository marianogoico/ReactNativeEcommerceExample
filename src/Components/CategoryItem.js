import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'

const CategoryItem = ({category, setCategorySelected}) => {
  return (
    <Pressable onPress={()=>setCategorySelected(category)}>
        <CardShadow style = {styles.container}>
            <Text style = {styles.text}>{category}</Text>
        </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width:"80%",
        backgroundColor:colors.violet,
        margin:10,
        marginHorizontal:"10%",
        padding:10,
        alignItems:"center",
    }
})