//React dependencies
import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

//Screens
import { SplashScreen } from './screens/SplashScreen'
import { DashBoardScreen } from './screens/DashboardScreen'
import { MoodScreen } from './screens/MoodScreen'
import { MapScreen } from './screens/MapScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { LoginScreen } from './screens/LoginScreen'

/**
* TODO:
* Different icon for focused or not focused
*/ 

/**
 * corresponding navigation icon following the routing
 * 
 * @param {Navigation} navigation 
 * @param {Boolean} focused 
 * @param {HexCode} tintColor 
 */
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state
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
  return <IconComponent name={iconName} size={30} color={tintColor} />
};

//const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

/**
 * initiliaze bottomTabNavigator with working navigation
 */
const AppNavigator = createBottomTabNavigator({
  Dashboard: { screen: DashBoardScreen },
  Mood: { screen: MoodScreen },
  Empty: { screen: MoodScreen },
  Map: { screen: MapScreen },
  Profile: {screen: LoginScreen},
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
  initialRouteName: 'Mood',

})

const AuthContainer = createAppContainer(createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    //App: AppStack,
    Auth: { screen: LoginScreen },
  },
  {
    //initialRouteName: 'AuthLoading',
  }
))

/**
 * create app navigation
 */
const AppContainer = createAppContainer(AppNavigator)

export default class Main extends Component {
  state = {
    ready: false,
    userLoggedIn: false
  }
  
  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: true, userLoggedIn: true })
    }, 2000)
  }

  render() {
    if (this.state.ready === false) {
      return (
        <SplashScreen/>
      )
    } else {
    if( this.state.userLoggedIn){
      return (
        <AppContainer />
      )
    } else{
      return (
        <AuthContainer />
      )

    }
    }
  }
}