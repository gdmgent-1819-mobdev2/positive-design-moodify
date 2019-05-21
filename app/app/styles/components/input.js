import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units';
const input = StyleSheet.create({
  container:{
    width: vw(80),
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  textContainer: {
    width: vw(70),
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
})

export default input