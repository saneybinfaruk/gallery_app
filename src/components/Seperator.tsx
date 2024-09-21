import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.container} />;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});
