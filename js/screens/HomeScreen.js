/* @flow */
import React, {Component} from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  Slider,
  StatusBar
} from 'react-native'
import {Container, Header, Left, Body, Right, Content, Card, CardItem} from 'native-base'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    let {dispatch, user} = this.props
    user = user.toJS()
    return (
      <Container style={styles.container}>
        <StatusBar hidden backgroundColor='rgb(56, 255, 218)'/>
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

          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.activityHeader}>Your goals last week:</Text>
            <Card>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image
                    source={require('../../assets/images/walking.png')}
                    style={styles.partnerLogo}  
                  />
                  <View style={styles.partnerInfoContainer}>
                    <Slider disabled value={0.4}></Slider>
                    <Text>1km to win</Text>
                  </View>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/cycling.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                    <Slider disabled value={0.2}></Slider>
                    <Text>10km to win</Text>
                  </View>
                  
                </Body>
              </CardItem>
              <CardItem>
                <Body style={styles.cardItemBody}>
                  <Image source={require('../../assets/images/swimming.png')} style={styles.partnerLogo}/>
                  <View style={styles.partnerInfoContainer}>
                    <Slider disabled value={0.6}></Slider>
                    <Text>0.2km to win</Text>
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

HomeScreen.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(56, 255, 218)',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentStyle: {
    paddingTop: 5,
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
    flex: 1,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(96, 100, 109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    marginLeft: 20
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
    color: 'rgba(96,100,109,1)',
    textAlign: 'center',
  },
  cardItemBody: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)'
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
    backgroundColor: 'rgb(56, 255, 218)'
  },
  activityHeader: {
    fontSize: 16
  }
})

function select(store) {
  return {
    user: store.get('user')
  }
}

export default connect(select)(HomeScreen)
