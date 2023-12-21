import { StyleSheet} from 'react-native'
import Categories from '../Components/Categories'
import Header from '../Components/Header'

const Home = ({navigation,route}) => {
  return (
    <>
      <Categories navigation = {navigation} route = {route}/> 
    </>
  )
}

export default Home

const styles = StyleSheet.create({})