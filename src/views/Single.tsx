import {Video, ResizeMode} from 'expo-av';
import {Card, Text, ListItem, Icon} from '@rneui/themed';
import {MediaItemWithOwner} from '../types/DBTypes';

const Single = ({route}: {route: {params: MediaItemWithOwner}}) => {
  const item = route.params;
  const [fileType, fileFormat] = item.media_type.split('&#x2F;');

  return (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      {fileType === 'image' ? (
        <Card.Image
          style={{height: 400}}
          resizeMode="contain"
          source={{uri: 'http:' + item.filename}}
        />
      ) : (
        <Video
          style={{height: 400}}
          source={{uri: 'http:' + item.filename}}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />
      )}
      <ListItem>
        <Text>{item.description}</Text>
      </ListItem>
      <ListItem>
        <Icon name="today" />
        <Text>{new Date(item.created_at).toLocaleString('fi-FI')}</Text>
      </ListItem>
      <ListItem>
        <Icon name="person" />
        <Text>Owner: {item.username}</Text>
      </ListItem>
      <ListItem>
        <Icon name="image" />
        <Text>
          Media type: {fileType} / {fileFormat}
        </Text>
      </ListItem>
      <ListItem>
        <Text>File size: {Math.round(item.filesize / 1024)} kB</Text>
      </ListItem>
    </Card>
  );
};

export default Single;
