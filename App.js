import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { colors } from './src/Global/colors';
import Navitagor from './src/Navigation/Navitagor';



const App = () => {

  /*const [fontLoaded] = useFonts() */

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
        barStyle="default"
      />
      <Navitagor/>
    </>
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
