import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Categories from './src/Components/Categories';
import Header from './src/Components/Header';
import ItemListCategories from './src/Screens/ItemListCategories';
import { useState } from 'react';
import { useFonts } from 'expo-font';

const App = () => {

  const [fontLoaded] = useFonts()

  const [categorySelected, setCategorySelected] = useState("")
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected = {setCategorySelected}/>
      }
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
