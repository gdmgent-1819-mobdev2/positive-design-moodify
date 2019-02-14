import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { addButton } from '../styles'
import { Ionicons } from '@expo/vector-icons'

export class AddMoodButton extends Component {
  

  render(){
    return(
    <TouchableOpacity style={addButton.button}>
      <Ionicons name={'md-add'} size={50}  color={'#FFF'}/>
    </TouchableOpacity>
    );
  }
}
