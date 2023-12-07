import { StyleSheet} from 'react-native'
import Categories from '../Components/Categories'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
      <Header title = "Categories"/>
      <Categories/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})