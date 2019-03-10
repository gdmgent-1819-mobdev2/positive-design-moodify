//React dependencies
import React, { Component } from 'react'
import { View, Text } from 'react-native'
//Styles
import { dashboard, text } from '../styles'

export class DashboardCard extends Component {
  render(){
    return(
        <View style={dashboard.card}>
        <Text style={text.cardTitle} > {this.props.cardTitle} </Text>
        <Text style={text.cardText} > {this.props.cardText} </Text>
        </View>
    );
  }
}