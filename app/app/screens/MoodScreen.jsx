//React dependencies
import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

//Components
import { AddMoodButton } from '../components'

//Styles
import { grid, addButton, smiley, text } from '../styles'


export class MoodScreen extends Component{
  render() {
    return (
        <View style={grid.containerMoodScreen}>
        <Text style={text.header}>How are you feeling?</Text>
          <View style={grid.smiley}>
            <Image style={smiley.container} source={require('../assets/images/smileys/042-happy-8.png')}></Image>
            <Image style={smiley.container} source={require('../assets/images/smileys/033-angry-4.png')}></Image>
            <Image style={smiley.container} source={require('../assets/images/smileys/045-shocked-3.png')}></Image>
            <Image style={smiley.container} source={require('../assets/images/smileys/063-sad-2.png')}></Image>
            <Image style={smiley.container} source={require('../assets/images/smileys/088-thinking.png')}></Image>
            <Image style={smiley.container} source={require('../assets/images/smileys/077-sad-1.png')}></Image>
          </View>
          <View style={addButton.bottom}>
            <AddMoodButton />
          </View>
        </View>
    );
  }
}
