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
  // trying to work with an api... semothing with setstate
  /*constructor() {
    fetch('http://quotes.rest/qod.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let quote = {
          "text": responseJson.contents.quotes[0].quote,
          "author": responseJson.contents.quotes[0].author,
        }
        console.log(quote)
         
      })
      .catch((error) => {
        console.error(error);
      });
  }*/

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

          <DashboardCard>
            <Text style={text.cardTitle}> Tip of the day </Text>
            <Text style={text.cardText}> Go swimming! There's a swimming pool 3km away. </Text>
          </DashboardCard>

          <DashboardCard>
            <Text style={text.cardTitle}> History </Text>
          </DashboardCard>

        </ScrollView>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </ImageBackground>
    )
  }
}
