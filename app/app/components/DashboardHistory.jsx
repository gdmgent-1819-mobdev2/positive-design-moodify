//React dependencies
import React, { Component } from 'react'
import { View, Text } from 'react-native'
//Styles
import { dashboard, text } from '../styles'

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
          <Text style={this.state.letterStyles[1]}> M </Text>
          <Text style={this.state.letterStyles[2]}> T </Text>
          <Text style={this.state.letterStyles[3]}> W </Text>
          <Text style={this.state.letterStyles[4]}> T </Text>
          <Text style={this.state.letterStyles[5]}> F </Text>
          <Text style={this.state.letterStyles[6]}> S </Text>
          <Text style={this.state.letterStyles[0]}> S </Text>
        </View>
    );
  }
}