import React, { Component } from 'react'
import { MapView } from 'expo'



export class MapScreen extends Component{
  render() {
    return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 51.0535,
        longitude: 3.7304,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    )
  }
}