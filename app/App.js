import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import { SplashScreen } from './screens/SplashScreen'
import { DashBoardScreen } from './screens/DashboardScreen'
import { MoodScreen } from './screens/MoodScreen'
import { MapScreen } from './screens/MapScreen'
import { ProfileScreen } from './screens/ProfileScreen'

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Dashboard') {
    iconName = `md-speedometer${focused ? '' : ''}`;
  } else if (routeName === 'Mood') {
    iconName = `md-home${focused ? '' : ''}`;
  } else if (routeName === 'Map') {
    iconName = `md-map${focused ? '' : ''}`
  } else if (routeName === 'Profile') {
    iconName = `md-person${focused ? '' : ''}`
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={30} color={tintColor} />;
};

const AppNavigator = createBottomTabNavigator({
  Dashboard: { screen: DashBoardScreen },
  Mood: { screen: MoodScreen },
  Map: { screen: MapScreen },
  Profile: {screen: ProfileScreen}
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#F3BB21',
    inactiveTintColor: '#CCC',
    showLabel: false,
  },
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  state = {
    ready: false,
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 2000)
  }

  render() {
    if (this.state.ready === false) {
      return <SplashScreen/>
    } else {
      return <AppContainer />
    }
  }
}