import { StyleSheet } from 'react-native'

const dashboard = StyleSheet.create({
  card: {
    flex: 0.8,
    alignItems: "center",
    width: 360,
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
})

export default dashboard