import {View} from 'react-native';
import {Button} from '@rneui/base';
import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  const {handleLogout} = useUserContext();
  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Profile;
