import {StyleSheet} from 'react-native';
import {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import { tabBarStyle } from '../constants/datas';

/**
 * Hide the bottom navigation bar after entering the component.
 *
 * This hook is used to manage the visibility of the bottom navigation bar.
 * It ensures that the bottom navigation bar is hidden when this component is mounted.
 */

const useHideTabBar = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: tabBarStyle
      });
  }, [navigation, isFocused]);
};

export default useHideTabBar;

const styles = StyleSheet.create({});
