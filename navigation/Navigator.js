import {createSwitchNavigator, createAppContainer} from 'react-navigation';
//import switch nav pages
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
//import components for bottomNavbar
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';

import Dashboard from '../MainScreens/Dashboard';
import ListCheck from '../MainScreens/ListCheck';
import Schedule from '../MainScreens/Schedule';
import {createStackNavigator} from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Login',
  },
);
//in App navoigator
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {screen: Dashboard},
    Check: {screen: ListCheck},
    Schedule: {screen: Schedule},
  },
  {initialRouteName: 'Home'},
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Login') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createSwitchNavigator({
  App: BottomNavigator,
  Auth: StackNavigator,
});
const AppContainer = createAppContainer(AppNavigator);

export default class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
