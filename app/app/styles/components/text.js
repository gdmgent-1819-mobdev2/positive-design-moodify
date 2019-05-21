import { StyleSheet } from 'react-native'
import { vh } from 'react-native-expo-viewport-units';

const text = StyleSheet.create({
  header: {
    fontSize: vh(3),
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'europa-regular',
    marginBottom: 30,
  },
  tabs: {
    fontSize: vh(4),
    alignSelf: 'flex-start',
    color: '#2B2B2B',
    fontFamily: 'europa-bold',
    paddingBottom: 2,
    marginLeft: 20,
    marginBottom: 18,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: vh(2),
    alignSelf: 'flex-start',
    color: '#4F4F4F',
    fontFamily: 'europa-bold',
    marginBottom: 4,
  },
  cardText: {
    fontSize: vh(1.6),
    alignSelf: 'flex-start',
    color: '#616161',
    fontFamily: 'europa-regular',
    marginRight: 18,
    marginBottom:20,
  },
  option: {
    fontSize: vh(2),
    color: '#616161',
    fontFamily: 'europa-regular',
    marginRight: 4,
  },
  profileName: {
    fontSize: vh(2.6),
    color: '#616161',
    fontFamily: 'europa-regular',
    marginTop: 4,
  },
  weekdayLetter: {
    fontSize: vh(2.4),
    color: '#616161',
    fontFamily: 'europa-regular',
    margin: 14,
  },
  weekdayLetterHighlighted: {
    fontSize: vh(2.4),
    color: '#FF4140',
    fontFamily: 'europa-regular',
    margin: 14,
  },
  inputLabel: {
    fontSize: vh(3),
    alignSelf: 'flex-start',
    color: '#4F4F4F',
    fontFamily: 'europa-bold',
    marginBottom: 6,
  },
  inputText: {
    fontSize: vh(2),
    alignSelf: 'flex-start',
    color: '#616161',
    fontFamily: 'europa-regular',
  },
  button: {
    fontSize: vh(3),
    alignSelf: 'center',
    color: '#616161',
    fontFamily: 'europa-regular',
  },
})

export default text