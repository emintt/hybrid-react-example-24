import {StatusBar} from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import Home from './src/views/Home';
import Navigator from './src/navigators/Navigator';

const App = () => {
  console.log('moro');
  return (
    <SafeAreaView style={styles.container}>
      {/* wrap the app inside NavigationContainer */}
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});

// Goals on this branch:
// Bottom tab menu has two links: 'Home' and 'Profile'
// Each thumbnail is TouchableOpacity and tapping them should take to 'Single' to
// show the selected media file (just images at this point)
