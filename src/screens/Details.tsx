import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import useHideTabBar from '../hooks/useHideTabBar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../interfaces/interfaces';
import {usePhotoQuery} from '../redux/gallaryApi';
import FastImage from 'react-native-fast-image';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useFavorite from '../hooks/useFavorite';
import BoldText from '../components/BoldText';
import MediumText from '../components/MediumText';

type Props = NativeStackScreenProps<RootParamList, 'Details'>;

const Details = ({navigation, route}: Props) => {
  useHideTabBar();

  const {photoId} = route.params;

  const {data: photo, isLoading, isError, error} = usePhotoQuery({photoId});
  const {favorite, toggleFavorite} = useFavorite(photo!);

  useEffect(() => {
    navigation.setOptions({title: photo?.title});
  }, [navigation, photo?.title]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <View style={styles.container}>
        <BoldText>Error fetching photo </BoldText>
      </View>
    );
  }

  if (!photo) {
    return (
      <View style={styles.container}>
        <BoldText>No photo found</BoldText>
      </View>
    );
  }

  const image = {uri: photo.url};

  return (
    <View style={styles.container}>
      <FastImage source={image} style={styles.image} />
      <View style={styles.info}>
        <View style={{flex: 1}}>
          <BoldText style={styles.textFont}>{photo.title}</BoldText>
          <MediumText style={styles.textFont}>Album Id: {photo.albumId}</MediumText>
        </View>
        <TouchableOpacity onPress={toggleFavorite}>
          <MaterialIcons
            name={favorite ? 'favorite' : 'favorite-border'}
            size={30}
            color={'crimson'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  info: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    left: 0,
    right: 0,
    paddingVertical: 25,
    paddingHorizontal: 15,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textFont: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
