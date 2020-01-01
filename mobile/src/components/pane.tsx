import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

interface Props extends ViewStyle {
  children?: ReactNode
}
export default function (props: Props) {
  return <View style={props}>{props.children}</View>
}
