//React dependencies
import React, { Component } from 'react'
import { View } from 'react-native'
//import { Svg, Defs, LinearGradient, Stop, Ellipse } from 'expo';

//Components
import { AddMoodButton } from '../components'

//Styles
import { grid, addButton } from '../styles'


export class DashBoardScreen extends Component{
  render() {
    return (
      // <Svg
      //   height="150"
      //   width="300"
      // >
      //   <Defs>
      //     <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
      //       <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
      //       <Stop offset="1" stopColor="red" stopOpacity="1" />
      //     </LinearGradient>
      //   </Defs>
      //   <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
      // </Svg>
      <View style={grid.containerDashboardScreen}>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </View>
    )
  }
}
