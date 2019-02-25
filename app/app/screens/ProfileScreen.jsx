//React dependencies
import React, { Component } from 'react'
import { View } from 'react-native'

//Components
import { AddMoodButton } from '../components'

//Styles
import { grid, addButton } from '../styles'


export class ProfileScreen extends Component{
  render() {
    return (
      <View style={grid.container}>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </View>
    )
  }
}
