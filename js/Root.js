/* @flow */
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


import RootNavigator from './RootNavigator'

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator/>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } 
})

Root.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
}

function select(store) {
  return {
    user: store.get('user')
  }
}

export default connect(select)(Root)
