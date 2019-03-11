//React dependencies
import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
//import { Svg, Defs, LinearGradient, Stop, Ellipse } from 'expo';

//Components
import { AddMoodButton } from '../components'
import { DashboardCard } from '../components'

//Styles
import { grid, addButton, text, dashboard } from '../styles'


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
      <ImageBackground style={grid.containerDashboardScreen} source={require('../assets/images//dashboardBG.png')}>
        <ScrollView contentContainerStyle={dashboard.cardContainer} showsVerticalScrollIndicator={false}>
          <Text style={text.tabs}>Dashboard</Text>
          <DashboardCard cardTitle="Tip of the day" cardText="Go swimming! There's a public pool 2km away." />
          <DashboardCard cardTitle="History"/>
        </ScrollView>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </ImageBackground>
    )
  }
}
