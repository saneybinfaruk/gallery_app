import {
  Animated,
  Easing,
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '..';

const Skeleton = ({style}: {style?: StyleProp<ViewStyle>}) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),

        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 900,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        styles.defaultStyle,
        {
          opacity: opacity.current,
        },

        style,
      ]}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 2,
  },
});
