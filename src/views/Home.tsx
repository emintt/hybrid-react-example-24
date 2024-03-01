import {FlatList} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useMedia} from '../hooks/apiHooks';
import MediaListItem from '../components/MediaListItem';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <FlatList
        data={mediaArray}
        renderItem={({item}) => (
          <MediaListItem item={item} />
        )}
      />
    </>
  );
};

export default Home;
