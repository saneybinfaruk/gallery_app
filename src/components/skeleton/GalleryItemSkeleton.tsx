import {StyleSheet, Text, View} from 'react-native';
import React from 'react'; 
import { Skeleton } from '..';

const GalleryItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} />
      <View style={styles.nameContainer}>
        <Skeleton style={{height: 25}} />
        <Skeleton style={{height: 25,width: '100%'}} />
      </View>
    </View>
  );
};

export default GalleryItemSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  image: {
    height: 80,
    width: 80,
  },
  nameContainer: {
    flex: 1,
    gap: 5
  },
  nameText: {},
});
