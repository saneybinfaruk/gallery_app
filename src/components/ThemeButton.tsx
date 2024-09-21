import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import useTheme from '../hooks/useTheme';
import {Colors} from '../constants/Colors';
import MediumText from './MediumText';

const ThemeButton = () => { 
  const {themeMode} = useSelector((state: RootState) => state.themeSlice);
  const {handleToggle} = useTheme();
  const [isEnabled, setIsEnabled] = useState(themeMode === 'dark');

  const toggle = () => {
    handleToggle();
    setIsEnabled(prev => !prev);
  };
  return (
    <TouchableOpacity
      onPress={toggle}
      activeOpacity={0.7}
      style={styles.container}>
      <MediumText style={styles.label}>
        {themeMode.substring(0, 1).toUpperCase() + themeMode.substring(1)}
      </MediumText>
      <View> 
        <Switch
          onValueChange={toggle}
          value={isEnabled}
          trackColor={{false: Colors.tabBarInActive, true: Colors.tabBarActive}}
          thumbColor={isEnabled ? Colors.primary : 'black'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ThemeButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    gap: 5
  },
  label: {
    paddingHorizontal: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
  },
});
