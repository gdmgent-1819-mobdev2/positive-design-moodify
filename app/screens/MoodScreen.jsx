import React, { Component } from 'react'
import { View } from 'react-native'
import { grid, addButton } from '../styles'
import { AddMoodButton } from '../components/AddMoodButton'


export class MoodScreen extends Component{
  render() {
    return (
      <View style={grid.container}>
        <View style={addButton.bottom}>
          <AddMoodButton />
        </View>
      </View>
    );
  }
}