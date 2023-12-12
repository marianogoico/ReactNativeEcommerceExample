import { StyleSheet} from 'react-native'
import Categories from '../Components/Categories'
import Header from '../Components/Header'

const Home = ({setCategorySelected}) => {
  return (
    <>
      <Header title = "Categories"/>
      <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})