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
    flex: 1,
    backgroundColor: '#FFF',
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
    flex: 1,
    backgroundColor: '#129EEF',
    flexDirection: 'column',
    alignItems: 'center'
  },

  smiley: {
    flexDirection: 'row'
  }

})

export default grid