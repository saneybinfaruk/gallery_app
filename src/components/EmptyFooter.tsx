import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyFooter = () => {
  return <View style={styles.container} />;
};

export default EmptyFooter;

const styles = StyleSheet.create({
  container: {
    height: 65,
  },
});
