/* @flow */
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import HomeScreen from './screens/HomeScreen'
import ActivityScreen from './screens/ActivityScreen'

//import RootNavigator from './RootNavigator'

export default class App extends Component {
  state = {
    store: undefined
  }
  constructor(props) {
    super(props)
    this.state.store = configureStore()
  }
  
  render() {
    return (
      <Provider store={this.state.store}>
        <HomeScreen/>
      </Provider>
    )
  }
}
