import { StyleSheet } from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units';

const grid = StyleSheet.create({
  containerInitial: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  containerMoodScreen: {
    flex: 1,
    backgroundColor: '#F9C296',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerDashboardScreen: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerAuthScreen: {
    paddingTop: 50,
    width: vw(100),
    height: vh(100),
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    alignItems: 'center'
  },
  darkenOverlay: {
    width: vw(100),
    height: vh(110),
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  smiley: {
    flexDirection: 'row'
  }

})

export default grid