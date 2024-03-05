import {StatusBar} from 'expo-status-bar';
import Navigator from './src/navigators/Navigator';
import {UserProvider} from './src/contexts/UserContext';
import {UpdateProvider} from './src/contexts/UpdateContext';

const App = () => {
  return (
    <UserProvider>
      <UpdateProvider>
        {/* wrap the app inside NavigationContainer */}
        <Navigator />
        <StatusBar style="auto" />
      </UpdateProvider>
    </UserProvider>
  );
};

export default App;
