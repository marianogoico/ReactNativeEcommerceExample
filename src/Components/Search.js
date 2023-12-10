import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Global/colors'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'


const Search = ({keyWord, setKeyWord}) => {

    const [input, setInput] = useState("")

    return (
        <View style = {styles.container}>
        
            <TextInput style={styles.input} placeholder='Buscar' value={input} onChangeText={(t) => setInput(t)}/>

            <Pressable onPress={() => setKeyWord(input)}>
                <AntDesign name="search1" color="black" size={20}/>
            </Pressable>
            
            <Pressable onPress={() => setKeyWord("")}>
                <Entypo name="circle-with-cross" color="black" size={20}/>
            </Pressable>

        </View> 
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:'row',
        alignItems:"center",
        gap:10,
    },
    input: {
        backgroundColor:colors.green1,
        width:"80%",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        margin:10,
        marginHorizontal:5,
    } 
})