import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';

import Dashboard from '../MainScreens/Dashboard';
import ListCheck from '../MainScreens/ListCheck';
import Schedule from '../MainScreens/Schedule';

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {screen: Dashboard},
    Check: {screen: ListCheck},
    Schedule: {screen: Schedule},
  },
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
export default createAppContainer(BottomNavigator);
