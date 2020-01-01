import React, { useEffect } from 'react'
import { YellowBox } from 'react-native'
import { Provider, Theme, DefaultTheme } from 'react-native-paper'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import AsyncStorage from '@react-native-community/async-storage'
// import Auth from '@aws-amplify/auth'
import AppNavigator from 'src/navigation/AppNavigator'
import { primary, accent, background, text } from 'src/components/colors'

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps'])

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('userToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const theme: Theme = {
  ...DefaultTheme,
  mode: 'adaptive',
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary,
    background,
    accent,
    text
  },
  fonts: {
    ...DefaultTheme.fonts,
    light: {
      fontFamily: 'SFProDisplay-Light',
      fontWeight: '200'
    },
    medium: {
      fontFamily: 'SFProDisplay-Medium',
      fontWeight: '500'
    },
    regular: {
      fontFamily: 'SFProDisplay-Regular',
      fontWeight: '400'
    },
    thin: {
      fontFamily: 'SFProDisplay-Thin',
      fontWeight: '100'
    }
  }
}

export default function () {
  return (
    <ApolloProvider client={client}>
      <Provider theme={theme}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  )
}
