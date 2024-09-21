import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
import RegularText from './RegularText';

interface Props {
  showMenu?: boolean;
  showBackBtn?: boolean;
  title: string;
}
const Header = ({showBackBtn = true, showMenu = false, title}: Props) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <View style={styles.titleContainer}>
        {showBackBtn && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={20} color={colors.text} />
          </TouchableOpacity>
        )}
        <RegularText style={[styles.titleText, {color: colors.text}]}>{title}</RegularText>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center', gap: 40},
  titleText: {fontSize: 24, flex: 1},
});
