import { StyleSheet } from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units';
const button = StyleSheet.create({
  loginButton: {
    width: vw(50),
    height: vh(6),
    alignSelf: "center",
    justifyContent: "space-around",
    backgroundColor: '#F3BB21',
    borderRadius: 5,
  },
})

export default button