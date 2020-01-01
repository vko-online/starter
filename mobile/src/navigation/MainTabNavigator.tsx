import React from 'react'
import { Platform, Image, StyleSheet } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, StackNavigatorConfig, createDrawerNavigator, TabBarIconProps, HeaderBackButton, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Profile from 'src/screens/profile'
import Matches from 'src/screens/matches'
import Feed from 'src/screens/feed'
import Loading from 'src/screens/auth'
import Login from 'src/screens/auth/login'
import Signup from 'src/screens/auth/signup'
import { Account } from 'src/components/header'
import { H1 } from 'src/components/typography'

const ProfileStack = createStackNavigator(
  {
    Profile
  },
  {
    headerMode: 'none'
  }
)

ProfileStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabBarIconProps) => {
    return <Icon size={24} color={tintColor} name='ios-contact' />
  },
  tabBarLabel: 'Profile',
  title: 'Profile'
}

const MatchesStack = createStackNavigator(
  {
    Matches
  },
  {
    headerMode: 'none'
  }
)

MatchesStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabBarIconProps) => {
    return <Icon size={24} color={tintColor} name='ios-chatboxes' />
  },
  tabBarLabel: 'Matches',
  title: 'Matches'
}

const FeedStack = createStackNavigator(
  {
    Feed
  },
  {
    headerMode: 'none'
  }
)

FeedStack.navigationOptions = {
  tabBarIcon: ({ tintColor }: TabBarIconProps) => {
    return <Icon size={24} color={tintColor} name='ios-today' />
  },
  tabBarLabel: 'Feed',
  title: 'Feed'
}

const tabNavigator = createBottomTabNavigator({
  MatchesStack,
  FeedStack,
  ProfileStack
}, {
  initialRouteName: 'ProfileStack'
})

const Auth = createStackNavigator(
  {
    Login,
    Signup
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

const rootNavigator = createSwitchNavigator({
  Loading,
  App: tabNavigator,
  Auth
}, {
  // mode: 'modal',
  initialRouteName: 'Loading'
})

export default rootNavigator
