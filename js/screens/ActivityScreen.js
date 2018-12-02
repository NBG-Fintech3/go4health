/* @flow */
import React, {Component} from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import {Container, Header, Body, Content, Card, CardItem} from 'native-base'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class ActivityScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    let {dispatch, user} = this.props
    user = user.toJS()
    return (
      <Container style={styles.container}>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='#00ff99'/>
        <Header transparent style={styles.header}>
          <Body style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/go4more_logo.png')}
              style={styles.logoImage}
            />
          </Body>
        </Header>

        <Content style={styles.contentStyle}>

          <View style={styles.userInfoContainer}>
            <Image
              source={{uri:user.avatar}}
              style={styles.userAvatar}
            />
            <Text numberOfLines={1} style={styles.username}>
              Georgios Rassias
            </Text>
          </View>

          <View style={styles.pointContainer}>
            <Text style={styles.pointHeadline}>MY Go4More POINTS</Text>
            <Text style={styles.points}>{user.go4morePoints}</Text>
          </View>

          <View style={styles.activityContainer}>
            <Card>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image
                    source={require('../../assets/images/cosmote_logo.jpg')}
                    style={styles.partnerLogo}  
                  />
                  <View style={styles.partnerInfoContainer}>
                  </View>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/shell_logo.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                  </View>
                  
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/sklavenitis_logo.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                  </View>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/sklavenitis_logo.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                  </View>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/sklavenitis_logo.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>

        </Content>

      </Container>
    )
  }
}

ActivityScreen.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0,
    overflow: 'hidden',
    backgroundColor: '#00ff99',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentStyle: {
    position: 'absolute',
    paddingTop: 5,
    bottom: 0,
    top: 0
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: 60,
    height: 60
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20
  },
  userAvatar: {
    width: 90,
    height: 90,
    borderRadius: 150 / 2
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  username: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(96, 100, 109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    paddingLeft: 20
  },
  pointHeadline: {
    fontSize: 20
  },
  points: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  tabBarInfoContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#fbfbfb',
    marginTop: 20,
    paddingVertical: 0
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  cardItemBody: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 100
  },
  navigationFilename: {
    marginTop: 5,
  },
  pointContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  partnerLogo: {
    width: 60,
    height: 60
  },
  partnerInfoContainer: {
    flex: 1,
    paddingLeft: 10
  },
  header: {
    backgroundColor: '#00ff99'
  },
  activityContainer: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: 'rgb(100,100,100)'
  }
})

function select(store) {
  return {
    user: store.get('user')
  }
}

export default connect(select)(ActivityScreen)
