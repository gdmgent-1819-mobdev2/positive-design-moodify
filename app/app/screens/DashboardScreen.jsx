//React dependencies
import React, { Component } from 'react'
import { View, Text, ImageBackground, ScrollView, Image, ActivityIndicator } from 'react-native'
//import { Svg, Defs, LinearGradient, Stop, Ellipse } from 'expo';

//Components
import { AddMoodButton } from '../components'
import { DashboardCard } from '../components'
import { DashboardHistory } from '../components'

//Styles
import { grid, addButton, text, dashboard } from '../styles'
import { vh, vw } from 'react-native-expo-viewport-units';


export class DashBoardScreen extends Component{
    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
    componentDidMount(){
      const randIndex =  Math.floor(Math.random() * 5) + 0

      return fetch('https://www.codeddesign.be/api.json#')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            tipText: responseJson.results[randIndex].content,
            tipImage: responseJson.results[randIndex].url
          }, function(){
  
          })
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, paddingTop: 200}}>
          <ActivityIndicator/>
        </View>
      )
    }

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
            <View style={dashboard.titleDivider}/>
            <Text style={text.cardText}> {this.state.tipText} </Text>
            <View style={dashboard.imageContainer}>
              <Image style={dashboard.image} source={{uri: this.state.tipImage}}></Image>
            </View>
          </DashboardCard>

          <DashboardCard>
            <Text style={text.cardTitle}> History </Text>
            <View style={dashboard.titleDivider}/>
            <DashboardHistory/>
          </DashboardCard>

        </ScrollView>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </ImageBackground>
    )
  }
}
