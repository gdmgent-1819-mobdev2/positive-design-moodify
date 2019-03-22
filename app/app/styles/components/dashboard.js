import { StyleSheet } from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'

const dashboard = StyleSheet.create({
  card: {
    flex: 0.8,
    alignItems: "center",
    width: vw(90),
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius:15,
    marginBottom:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  cardContainer: {
    paddingBottom: 40,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    alignSelf: "flex-start",
    width: vw(85),
    height: vh(20),
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
})

export default dashboard