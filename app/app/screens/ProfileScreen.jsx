//React dependencies
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Switch } from 'react-native'

//Components
import { AddMoodButton, DashboardCard } from '../components'

//Styles
import { grid, addButton, text, dashboard, profile } from '../styles'


export class ProfileScreen extends Component{

	state = {switchValue1:false, switchValue2:false, switchValue3:false, switchValue4:false}
  toggleSwitch1 = (value) => {
    this.setState({switchValue1: value})
	}
	toggleSwitch2 = (value) => {
		this.setState({switchValue2: value})
	}
	toggleSwitch3 = (value) => {
		this.setState({switchValue3: value})
	}
	toggleSwitch4 = (value) => {
		this.setState({switchValue4: value})
	}

  render() {
    return (
			<View style={grid.container}>
				<ScrollView contentContainerStyle={dashboard.cardContainer} showsVerticalScrollIndicator={false}>
					<Text style={text.tabs}>Profile</Text>

					<DashboardCard>
						<View style={profile.container}>
							<Image style={profile.image} source={require('../assets/images/user_placeholder.png')}></Image>
							<Text style={text.profileName}> Jan Temmerman </Text>
						</View>
					</DashboardCard>

					<View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10}}>
						<Text style={text.option}> Optie 1 </Text>
						<Switch onValueChange = {this.toggleSwitch1} value = {this.state.switchValue1} />
					</View>
					<View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10}}>
						<Text style={text.option}> Optie 2 </Text>
						<Switch onValueChange = {this.toggleSwitch2} value = {this.state.switchValue2} />
					</View>
					<View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10}}>
						<Text style={text.option}> Optie 3 </Text>
						<Switch onValueChange = {this.toggleSwitch3} value = {this.state.switchValue3} />
					</View>
					<View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10}}>
						<Text style={text.option}> Optie 4 </Text>
						<Switch onValueChange = {this.toggleSwitch4} value = {this.state.switchValue4} />
					</View>
					

				</ScrollView>

				<View style={addButton.bottom}>
					<AddMoodButton />
				</View>

			</View>
    )
  }
}
