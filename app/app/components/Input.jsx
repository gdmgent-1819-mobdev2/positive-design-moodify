//React dependencies
import React, { Component } from 'react'
import { View, Text, TextInput} from 'react-native'
//Styles
import { input, text } from '../styles'

export class Input extends Component {
  render(){
    return(
        <View style={input.container}>
            <View style={{flexDirection: "column"}}>
                <Text style={text.inputLabel}>
                    {this.props.label}
                </Text>
                <View style={input.textContainer}>
                    <TextInput 
                        style={text.inputText}
                        autoCorrect={false}
                        onChangeText={this.props.onChangeText}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secureTextEntry}
                        value={this.props.value}
                    />
                </View>
            </View>
        </View>
    );
  }
}