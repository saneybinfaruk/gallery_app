import React, {memo, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Skeleton} from './index';
import FastImage from 'react-native-fast-image';

interface Props {
  id: number;
  title: string;
  thumbnailUtl: string;
  isLoading?: boolean;
  onPress: () => void;
}

const PhotoCard = ({id, title, thumbnailUtl, isLoading, onPress}: Props) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {isImageLoading && <Skeleton style={styles.skeleton} />}

      <FastImage
        source={{uri: thumbnailUtl}}
        style={styles.image}
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
      />
    </TouchableOpacity>
  );
};

export default memo(PhotoCard);

const styles = StyleSheet.create({
  container: {
    height: 140,
    margin: 2,
    flex: 1,
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  skeleton: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
});
