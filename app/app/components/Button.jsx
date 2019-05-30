//React dependencies
import React, { Component } from 'react'
import { Text, TouchableOpacity} from 'react-native'
//Styles
import { text, button } from '../styles'

export class Button extends Component {
  render(){
    return(
        <TouchableOpacity style={button.loginButton} onPress={this.props.onPress}>
            <Text style={text.button}>
                {this.props.children}
            </Text>
        </TouchableOpacity>
    );
  }
}