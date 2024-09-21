import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Home from './screens/Home';
import {Provider, useSelector} from 'react-redux';
import {persistor, RootState, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomParamList, RootParamList} from './interfaces/interfaces';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from './screens/Favorite';
import Details from './screens/Details';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from './components';
import {tabBarStyle} from './constants/datas';
import {DarkTheme, LightTheme} from './theme/theme';
import Header from './components/Header';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator<BottomParamList>();

  const Stack = createNativeStackNavigator<RootParamList>();

  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: ({options: {title}}) => <Header title={title!} />,
      }}>
      <Stack.Screen name="HomeStack" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );

  const FavoriteStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: ({options: {title}}) => <Header title={title!} />,
      }}>
      <Stack.Screen name="FavoriteStack" component={Favorite} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: true,title: ''}}
      />
    </Stack.Navigator>
  );

  const tabBarIcon = (focused: boolean, name: string) => (
    <MaterialIcons
      name={name}
      size={25}
      color={focused ? Colors.tabBarActive : Colors.tabBarInActive}
    />
  );
  const Tabs = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'photo'),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, 'favorite'),
        }}
      />
    </Tab.Navigator>
  );

  const Nav = () => {
    const {themeMode} = useSelector((state: RootState) => state.themeSlice);
    const isDarkMode = themeMode === 'dark';
    const {colors} = useTheme();

    return (
      <>
        <StatusBar
          barStyle={isDarkMode ? 'dark-content' : 'light-content'}
          backgroundColor={isDarkMode ? Colors.primary : Colors.secondary}
        />
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
          <Tabs />
        </NavigationContainer>
      </>
    );
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <Nav />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: tabBarStyle,
  tabBarContainer: tabBarStyle,
  tabButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  focusedTab: {
    borderTopWidth: 2,
    borderTopColor: '#673ab7',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
