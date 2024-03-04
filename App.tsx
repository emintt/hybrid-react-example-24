import {StatusBar} from 'expo-status-bar';
import Navigator from './src/navigators/Navigator';
import {UserProvider} from './src/contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      {/* wrap the app inside NavigationContainer */}
      <Navigator />
      <StatusBar style="auto" />
    </UserProvider>
  );
};

export default App;
