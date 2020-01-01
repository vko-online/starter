import React from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import { Avatar, Appbar } from 'react-native-paper'
import { H1, H3 } from './typography'
import { withNavigation, NavigationScreenProp, HeaderBackButton } from 'react-navigation'

export interface HeaderProps {
  title?: string
  showBack?: boolean
  showUser?: boolean
  onPress?: () => void
  navigation: NavigationScreenProp<any>
}
function Header ({ title, onPress, showBack = false, showUser = true, navigation }: HeaderProps) {
  return (
    <Appbar.Header style={{ backgroundColor: '#fff', paddingHorizontal: 10, zIndex: 10000 }}>
      {
        showBack && <Appbar.BackAction onPress={() => navigation.goBack() as any} />
      }
      {
        !showBack && <Appbar.Action icon='magnify' size={24} />
      }
      {
        <Appbar.Content title={title} titleStyle={{ color: '#444' }} />
      }
      {
        showUser && (
          <Appbar.Action size={24} icon={require('src/assets/images/avatar.png')} onPress={() => navigation.navigate('Profile') as any} />
        )
      }
      <View />
    </Appbar.Header>
  )
}

export interface GuestHeaderProps {
  title: string
  showBack?: boolean
  navigation: NavigationScreenProp<any>
}
function _GuestHeader ({ title, showBack = false, navigation }: GuestHeaderProps) {
  return (
    <Appbar.Header style={{ backgroundColor: '#fff', paddingHorizontal: 10, zIndex: 10000 }}>
      {
        showBack && <Appbar.BackAction onPress={() => navigation.goBack() as any} />
      }
      <H1>{title}</H1>
    </Appbar.Header>
  )
}

interface AccountProps {
  navigation: NavigationScreenProp<any>
}
export function _Account ({ navigation }: AccountProps) {
  return (
    <TouchableOpacity style={{ marginHorizontal: 10 }} activeOpacity={0.8} onPress={() => navigation.navigate('Profile')}>
      <Avatar.Image size={30} source={require('src/assets/images/avatar.png')} />
    </TouchableOpacity>
  )
}

export const Account = withNavigation(_Account)
export const GuestHeader = withNavigation(_GuestHeader)

export default withNavigation(Header)
