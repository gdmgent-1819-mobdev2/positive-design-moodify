//React dependencies
import React, { Component } from 'react'
import { View } from 'react-native'
//Styles
import { dashboard } from '../styles'

export class DashboardCard extends Component {
  render(){
    return(
        <View style={dashboard.card}>
        { this.props.children }
        </View>
    );
  }
}