import React from 'react'
import { View, AsyncStorage } from 'react-native'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import Page, { Loading } from 'src/components/page'
import { FeedComponent } from 'src/generated/graphql'
import { ActivityIndicator, List } from 'react-native-paper'
import { Title, Subtitle, Label } from 'src/components/typography'

interface Props {
  navigation: NavigationScreenProp<any>
}
function Screen ({ navigation }: Props) {
  return (
    <Page>
      <FeedComponent>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />
          }
          return (
            <View>
              {
                data.feed.map(v => <Title key={v.id}>{v.name}</Title>)
              }
            </View>
          )
        }}
      </FeedComponent>
    </Page>
  )
}

export default withNavigation(Screen)
