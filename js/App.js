/* @flow */
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import RootNavigator from './RootNavigator'


export default class App extends Component {

  state: {
    store: any
  }

  constructor() {
    console.log('AAAAAAAAA')
    super()
    this.state = {
      store: undefined
    }
  }
  /*
  // any is needed in order to make flow stop complaining
  // due to conflicting type definition
  // (see https://github.com/facebook/flow/issues/1803)
  async componentDidMount(): any {
    const store = await configureStore()
    this.setState({store})
  }

  render() {
    if (!this.state.store) {
      return null
    }
    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } 
})
