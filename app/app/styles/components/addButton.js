import { StyleSheet } from 'react-native'
const addButton = StyleSheet.create({
  bottom: {
    position: 'absolute',
    bottom: -40,
  },
  button: {
    zIndex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    backgroundColor:'#F16656',
    borderRadius:100,
    borderColor: "#FFF",
    borderWidth: 10
  }
})

export default addButton