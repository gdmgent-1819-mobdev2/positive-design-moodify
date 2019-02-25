//React dependencies
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

//Styles
import { addButton } from '../styles'

export class AddMoodButton extends Component {
  render(){
    return(
    <TouchableOpacity style={addButton.button}>
      <Ionicons name={'md-add'} size={50}  color={'#FFF'}/>
    </TouchableOpacity>
    );
  }
}
