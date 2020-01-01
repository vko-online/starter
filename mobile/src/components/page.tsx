import React, { ReactNode } from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Header, { HeaderProps } from './header'
import { withNavigation } from 'react-navigation'
import { Appbar, ActivityIndicator, Divider as DividerRNP } from 'react-native-paper'
import { Hpane } from 'view-on-steroids'

interface Props extends HeaderProps {
  children?: ReactNode
  noheader?: boolean
}
function Page ({ title, children, noheader, ...other }: Props) {
  return (
    <View style={{ flex: 1 }}>
      {/* {!noheader && <Header title={title} {...other} />} */}
      <Appbar.Header>
        <Appbar.Content title='169' />
      </Appbar.Header>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  )
}

export function Loading () {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <ActivityIndicator />
    </View>
  )
}

interface RowProps {
  children: ReactNode
}
export function Row ({ children }: RowProps) {
  return (
    <Hpane alignItems='center' justifyContent='space-between'>{children}</Hpane>
  )
}

export function Divider () {
  return (
    <DividerRNP style={{ height: 0, marginVertical: 10 }} />
  )
}

export default withNavigation(Page)