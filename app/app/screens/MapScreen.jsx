//React dependencies
import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Image, Dimensions , TouchableOpacity, ScrollView } from "react-native"

import SlidingUpPanel from 'rn-sliding-up-panel';

import { MapView } from 'expo'


// calculate card height/width on bottom of screen
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width - 20;

export class MapScreen extends Component {
  // get the information for on the map
  state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "156171",
        description: "This is the best place in Portland",
        image: require('../assets/images/smileys/045-shocked-3.png'),
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "7157161",
        description: "This is the second best place in Portland",
        image: require('../assets/images/smileys/003-angry-5.png'),
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "98798",
        description: "This is the third best place in Portland",
        image: require('../assets/images/smileys/010-nerd-10.png'),
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "87876",
        description: "This is the fourth best place in Portland",
        image: require('../assets/images/smileys/015-sad-7.png'),
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
    
           // render the map

      <View style={styles.container}>
      

        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (  
              // return the values inside the map 
              // create map pointers        
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <Image source={require('../assets/images/smileys/045-shocked-3.png')} style={{height: 50, width:50, padding: 10, }} />

                  <View style={styles.marker} >

                 </View>
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
            

              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              <TouchableOpacity onPress={() => this._panel.show()} >

                <View>
                  <Text>Show</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </Animated.ScrollView>


        <View style={styles.dragBack}>
            
              <SlidingUpPanel ref={c => (this._panel = c)} height={200} minimumDistanceThreshold={30}>
                {dragHandler => (
                  <View style={styles.dragBack}>
                    <View style={styles.dragHandler} {...dragHandler}>
                      <Text>Drag handler</Text>
                    </View>
                    <ScrollView>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                      <Text>Here is the content inside panel</Text>
                    </ScrollView>
                  </View>
                )}
              </SlidingUpPanel>
            </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,   
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  // start slideup css
  dragBack: {
    flex:1,
    zIndex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',

    justifyContent: 'center'
  },  
  dragHandler: {
    flex:6,
    alignSelf: 'stretch',
    zIndex: 2,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  // end slideup css
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

export default MapScreen