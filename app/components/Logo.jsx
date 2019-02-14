import React, { Component } from 'react'
import { Animated } from 'react-native'
import { logo } from '../styles'

export class Logo extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  render(){
    return(
        <Animated.Image
        onLoad={this.onLoad}
        {...this.props} 
        style={[
          {
            opacity: this.state.opacity,
          },
          this.props.style,
          logo.logo
        ]}
            source={require('../assets/images/logo.png')}
        />
    )
  }
}
