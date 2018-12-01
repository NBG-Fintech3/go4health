/* @flow */
import {StackNavigator} from 'react-navigation'

import HomeScreen from './screens/HomeScreen'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  headerMode: 'none'
})

export default RootNavigator
