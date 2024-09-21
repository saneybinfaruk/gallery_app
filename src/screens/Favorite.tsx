import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import useGridColumns from '../hooks/useGridColumns';
import {EmptyFooter, EmptyList, PhotoCard} from '../components'; 
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../interfaces/interfaces';

type Props = NativeStackScreenProps<RootParamList, 'FavoriteStack'>;

const Favorite = ({navigation}: Props) => {
  const {favoritePhotos} = useSelector(
    (state: RootState) => state.favoritePhotos,
  );
  const {numColumns} = useGridColumns();
  const handlePhotoCardPress = (photoId: number) => {
    navigation.navigate('Details', {photoId});
  };

  if (favoritePhotos.length === 0) return <EmptyList />;
  return (
    <FlatList
      key={numColumns}
      contentContainerStyle={styles.container}
      data={favoritePhotos}
      renderItem={({item: {photo}}) => (
        <PhotoCard
          id={photo.id}
          title={photo.title}
          thumbnailUtl={photo.thumbnailUrl}
          onPress={() => handlePhotoCardPress(photo.id)}
        />
      )}
      keyExtractor={item => item.photo.id.toString()}
      initialNumToRender={10}
      numColumns={numColumns}
      removeClippedSubviews={true}
      windowSize={10}
      getItemLayout={(data, index) => ({
        length: 140, // Height of the item
        offset: 140 * index, // Offset from the start of the list
        index,
      })}
      onEndReachedThreshold={0.3}
      ListEmptyComponent={<EmptyFooter />}
    />
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
