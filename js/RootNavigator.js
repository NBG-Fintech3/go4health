/* @flow */
import React, {Component} from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ActivityScreen from './screens/ActivityScreen'

export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)