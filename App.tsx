import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigators/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* wrap the app inside NavigationContainer */}
      <Navigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
