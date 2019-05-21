//React dependencies
import React, { Component } from 'react'
import { View, Text } from 'react-native'

//Components
import { Input, Button } from '../components'

//Styles
import { grid, text } from '../styles'


export class SignUpScreen extends Component{

    state = {email: '', password: ''}

  render() {
    return (
       // <ImageBackground style={grid.containerAuthScreen} resizeMode="cover" source={require('../assets/images/authBG.png')} blurRadius={1} >
            //<View style={grid.darkenOverlay}>
            <View style={grid.container}>
                <Text style={text.tabs}>Sign Up</Text>
                <Input placeholder="Enter email" label="Email" onChangeText={email => this.setState({email})} value={this.state.email}/>
                <Input placeholder="Enter Password" label="Password" secureTextEntry onChangeText={password => this.setState({password})} value={this.state.password}/>
                <Button>
                    Sign up
                </Button>
                <Button style={{backgroundColor: '#00000000'}} onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    Login
                </Button>
            </View>
       // </ImageBackground>
    );
  }
}
