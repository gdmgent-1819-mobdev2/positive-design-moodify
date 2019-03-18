import { StyleSheet } from 'react-native'

const text = StyleSheet.create({
  header: {
    fontSize: 28,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'europa-regular',
    marginBottom: 30,
  },
  tabs: {
    fontSize: 34,
    alignSelf: 'flex-start',
    color: '#2B2B2B',
    fontFamily: 'europa-bold',
    marginLeft: 20,
    marginBottom: 18,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#4F4F4F',
    fontFamily: 'europa-bold',
    marginBottom: 18,
  },
  cardText: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: '#616161',
    fontFamily: 'europa-regular',
    marginRight: 18,
    marginBottom:20,
  },
  option: {
    fontSize: 16,
    color: '#616161',
    fontFamily: 'europa-regular',
    marginRight: 4,
  },
  profileName: {
    fontSize: 20,
    color: '#616161',
    fontFamily: 'europa-regular',
    marginTop: 4,
  },
  weekdayLetter: {
    fontSize: 19,
    color: '#616161',
    fontFamily: 'europa-regular',
    margin: 14,
  },
  weekdayLetterHighlighted: {
    fontSize: 19,
    color: '#FF4140',
    fontFamily: 'europa-regular',
    margin: 14,
  },
})

export default text