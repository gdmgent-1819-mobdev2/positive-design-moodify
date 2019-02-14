import React, { Component } from 'react';
import { StyleSheet, Image, Animated } from 'react-native';

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
            width: 250,
            height: 55
          },
          this.props.style,
        ]}
            source={require('../assets/images/logo.png')}
        />
    );
  }
}
