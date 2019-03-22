//React dependencies
import React, { Component } from 'react'
import { View,  Text , Animated, Easing, TouchableHighlight  } from 'react-native'

//Components
import { AddMoodButton } from '../components'

//Styles
import { grid, addButton, smiley, text } from '../styles'


export class MoodScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false 
    };
    //this.animatedValue = new Animated.Value(0);
  }

  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  render() {
  
    return (
        <View style={grid.containerMoodScreen}>
        <Text style={text.header}>How are you feeling?</Text>
          <View style={grid.smiley}>
            
              <TouchableHighlight underlayColor='transparent'
                onPress={() => {}}
                style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}>
              
              <Animated.Image 
                activeOpacity={0.5}
                style={smiley.container} 
      
                source={require('../assets/images/smileys/042-happy-8.png')} />
              </TouchableHighlight  >

            
            <TouchableHighlight underlayColor='transparent'
              onPress={() => {}}
              style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
              onHideUnderlay={this._onHideUnderlay.bind(this)}
              onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Animated.Image 
              activeOpacity={0.5}
              style={smiley.container} 

            source={require('../assets/images/smileys/033-angry-4.png')} />
            </TouchableHighlight  >
              
            <TouchableHighlight underlayColor='transparent'
              onPress={() => {}}
              style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
              onHideUnderlay={this._onHideUnderlay.bind(this)}
              onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Animated.Image 
              activeOpacity={0.5}
              style={smiley.container} 

              source={require('../assets/images/smileys/045-shocked-3.png')}/>
            </TouchableHighlight  >

            <TouchableHighlight underlayColor='transparent'
              onPress={() => {}}
              style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
              onHideUnderlay={this._onHideUnderlay.bind(this)}
              onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Animated.Image 
              activeOpacity={0.5}
              style={smiley.container} 

            source={require('../assets/images/smileys/063-sad-2.png')} />
            </TouchableHighlight  >

            <TouchableHighlight underlayColor='transparent'
              onPress={() => {}}
              style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
              onHideUnderlay={this._onHideUnderlay.bind(this)}
              onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Animated.Image 
              activeOpacity={0.5}
              style={smiley.container} 

            source={require('../assets/images/smileys/088-thinking.png')} />
            </TouchableHighlight  >
            
            <TouchableHighlight underlayColor='transparent'
              onPress={() => {}}
              style={[this.state.pressStatus ? smiley.containerButton : smiley.container]}
              onHideUnderlay={this._onHideUnderlay.bind(this)}
              onShowUnderlay={this._onShowUnderlay.bind(this)}>
            <Animated.Image 
              activeOpacity={0.5}
              style={smiley.container} 

            source={require('../assets/images/smileys/077-sad-1.png')} />
            </TouchableHighlight  >

          </View>
          <View style={addButton.bottom}>
            <AddMoodButton />
          </View>
        </View>
    );
  }
}
/*
const RotateData = this.animatedValue .interpolate({
  inputRange: [0, 1],
  outputRange: [1, 1.5]
});
*/
