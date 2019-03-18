//React dependencies
import React, { Component } from 'react'
import { View, Text } from 'react-native'
//Styles
import { dashboard, text } from '../styles'

export class DashboardCard extends Component {
  render(){
    return(
        <View style={dashboard.card}>
        { this.props.children }
        </View>
    );
  }
}