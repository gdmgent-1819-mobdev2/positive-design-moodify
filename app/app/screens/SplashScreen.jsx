//React dependencies
import React, { Component } from 'react'
import { View } from 'react-native'

//Components
import { Logo, EuropaText } from '../components'

//Styles
import { grid, logo, slogan } from '../styles'


export class SplashScreen extends Component{
  render() {
    return (
      <View style={grid.containerInitial}>
        <View style={logo.logo}>
          <Logo />
          <EuropaText styling={slogan.text} name={ 'Improve your mood!' }></EuropaText>
        </View>
      </View>
    )
  }
}