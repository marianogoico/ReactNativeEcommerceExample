import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Categories from './src/Components/Categories';
import Header from './src/Components/Header';
import ItemListCategories from './src/Screens/ItemListCategories';

const App = () => {
  return (
    <View style={styles.container}>
      <ItemListCategories/>
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
