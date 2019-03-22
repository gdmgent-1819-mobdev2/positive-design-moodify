//React dependencies
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
//Styles
import {smiley, text } from '../styles'

export class DashboardHistory extends Component {

  state = {
    letterStyles: [
      text.weekdayLetter,
      text.weekdayLetter,
      text.weekdayLetter,
      text.weekdayLetter,
      text.weekdayLetter,
      text.weekdayLetter,
      text.weekdayLetter
    ]
  }


  componentDidMount() {
    this.highlightToday()
  }

  highlightToday = () => {
    const today = new Date()

    this.setState((prevState) => {
      const newStyles = prevState.letterStyles
      newStyles[today.getDay()] = text.weekdayLetterHighlighted
      return {
        ...prevState,
        letterStyles: newStyles
      }
    })
  }

  render(){
    //console.log(this.state.letterStyles)
    return(
        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "column"}}>
            <Text style={this.state.letterStyles[1]}> M </Text>
            <Image style={smiley.history} source={require('../assets/images/smileys/045-shocked-3.png')}></Image>
          </View>
          <View style={{flexDirection: "column"}}>
            <Text style={this.state.letterStyles[2]}> T </Text>
            <Image style={smiley.history} source={require('../assets/images/smileys/063-sad-2.png')}></Image>
          </View>
          <View style={{flexDirection: "column"}}>
            <Text style={this.state.letterStyles[3]}> W </Text>
            <Image style={smiley.history} source={require('../assets/images/smileys/088-thinking.png')}></Image>
          </View>
          <View style={{flexDirection: "column"}}>
            <Text style={this.state.letterStyles[4]}> T </Text>
            <Image style={smiley.history} source={require('../assets/images/smileys/077-sad-1.png')}></Image>
          </View>
          <Text style={this.state.letterStyles[5]}> F </Text>
          <Text style={this.state.letterStyles[6]}> S </Text>
          <Text style={this.state.letterStyles[0]}> S </Text>
        </View>
    )
  }
}