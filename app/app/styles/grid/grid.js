import { StyleSheet } from 'react-native'

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
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    alignItems: 'center'
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
  smiley: {
    flexDirection: 'row'
  }

})

export default grid