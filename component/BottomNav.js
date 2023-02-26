import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Profile from '../screens/profile'
import HomePage from '../screens/HomePage'
import Books from '../screens/book'
import Masseges from '../screens/massege'
import Teacher from '../screens/teacher'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'

const Tab = createBottomTabNavigator();
export default class BottomNav extends Component {
  render() {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{}
        }}
        >
        <Tab.Screen name="home" component={HomePage} options={{
            tabBarIcon:({focused})=>{
                <View style={{ borderWidth:2, borderColor:'#000000', height:10, width:10, alignItems:'center'}}>
                    <Text>hee</Text>
                </View>
            }
        }}/>
        <Tab.Screen name="Book" component={Books} />
        <Tab.Screen name="Massege" component={Masseges} />
        <Tab.Screen name="Teacher" component={Teacher} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
    tab:{
        position:'absolute',

    }
})