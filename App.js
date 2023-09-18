import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class example extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#49a984', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>
          啟動畫面範列
        </Text>
      </View>
    )
  }
}