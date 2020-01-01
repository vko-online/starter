import React, { useEffect } from 'react'
import { View, ActivityIndicator, StatusBar } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import decode from 'jwt-decode'

interface Props {
  navigation: NavigationScreenProp<any>
}
function App ({ navigation }: Props) {
  async function authFlow () {
    const userToken = await AsyncStorage.getItem('userToken')
    userToken && console.log(decode(userToken))
    navigation.navigate(userToken ? 'App' : 'Auth')
  }
  useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    authFlow()
  }, [])
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  )
}

export default withNavigation(App)
