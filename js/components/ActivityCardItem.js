/* @flow */
import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {CardItem, Body} from 'native-base'
import PropTypes from 'prop-types'


export default class ActivityCardItem extends Component{
  render() {
    const {activityType} = this.props
    return (
      <CardItem>
        <Body>
          <Image
            source={require(`../../assets/images/${activityType}.png`)}
            style={styles.activityImage}
          />
          <View style={styles.activityInfo}>

          </View>
        </Body>
      </CardItem>
    )
  }
  
}

const styles = StyleSheet.create({
  activityImage: {
    width: 50,
    height: 50
  },
  activityInfo: {
    flex: 1,
    paddingLeft: 5
  }
})

ActivityCardItem.propTypes = {
  activityType: PropTypes.string
}
