import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

interface Props {
  error: Error
}

export function Loading () {
  return (
    <View style={s.container}>
      <ActivityIndicator />
    </View>
  )
}

export function ApiError ({ error }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.errorText}>{error.message}</Text>
    </View>
  )
}

export function Empty () {
  return (
    <View style={s.container}>
      <Text style={s.emptyText}>No content</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    fontSize: 20
  },
  emptyText: {
    color: '#333',
    fontSize: 20
  }
})
