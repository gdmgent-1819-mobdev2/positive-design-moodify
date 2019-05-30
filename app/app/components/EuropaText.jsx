//React dependencies
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Font } from 'expo'


export class EuropaText extends Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    Font.loadAsync({
      'europa-regular': require('../assets/fonts/Europa-Regular.otf'),
      'europa-bold': require('../assets/fonts/Europa-Bold.otf')
    })
  }

  async componentDidMount() {
    await Font.loadAsync({
      'europa-regular': require('../assets/fonts/Europa-Regular.otf'),
      'europa-bold': require('../assets/fonts/Europa-Bold.otf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
        this.state.fontLoaded ? (
          <Text style={this.props.styling}>{this.props.name}</Text>
        ) : null
    )
  }
}
