import {DefaultTheme} from '@react-navigation/native';
import { Colors } from '../components';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: Colors.primary,
    background: '#F5F5F5',
    card: 'white',
    text: 'black',
    textLight: 'dimgray',
    border: 'lightgray',
    notification: '#004145',
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: Colors.primary,
    background: '#222432',
    card: '#2E2F45',
    text: 'white',
    textLight: 'whitesmoke',
    border: '#3e405e',
    notification: '#005459',
  },
};
