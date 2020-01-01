import React from 'react'
import { View, AsyncStorage } from 'react-native'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import Page, { Loading } from 'src/components/page'
import { MeComponent } from 'src/generated/graphql'
import { ActivityIndicator, List } from 'react-native-paper'
import { Title, Subtitle, Label } from 'src/components/typography'

interface Props {
  navigation: NavigationScreenProp<any>
}
function Screen ({ navigation }: Props) {
  return (
    <Page>
      <Title>Matches</Title>
    </Page>
  )
}

export default withNavigation(Screen)
