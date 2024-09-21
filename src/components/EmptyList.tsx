import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MediumText from './MediumText';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={'favorite'} color={'red'} size={60} />
      <MediumText style={styles.text}>Empty List</MediumText>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});
