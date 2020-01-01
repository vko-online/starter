import React from 'react'
import { View, AsyncStorage, StyleSheet } from 'react-native'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import Page, { Loading, Row, Divider } from 'src/components/page'
import { MeComponent } from 'src/generated/graphql'
import { Switch, TextInput, List } from 'react-native-paper'
import { Title, Subtitle, Label, Caption } from 'src/components/typography'
import { Picker } from '@react-native-community/picker'

const s = StyleSheet.create({
  input: {
    backgroundColor: '#fff'
  }
})

interface Props {
  navigation: NavigationScreenProp<any>
}
function Screen ({ navigation }: Props) {
  return (
    <Page>
      <MeComponent>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />
          }
          if (error) {
            // tslint:disable-next-line: no-floating-promises
            AsyncStorage.removeItem('userToken')
            return null
          }
          return (
            <View style={{ padding: 10 }}>
              <TextInput
                value={data.me.name}
                label='Name'
                mode='outlined'
                style={s.input}
              />
              <Divider />
              <TextInput
                value={data.me.phone}
                label='Phone'
                mode='outlined'
                style={s.input}
                disabled
              />
              <Divider />
              <TextInput
                value={data.me.gender}
                label='Gender'
                mode='outlined'
                style={s.input}
              />
              <Divider />
              <TextInput
                value={data.me.looking}
                label='Looking'
                mode='outlined'
              />
              <Row>
                <Caption>Looking</Caption>
                <Picker
                  selectedValue={data.me.looking}
                  mode='dropdown'
                  style={{ height: 100, width: 100 }}
                >
                  <Picker.Item label='Male' value='MALE' />
                  <Picker.Item label='Female' value='FEMALE' />
                  <Picker.Item label='Lesbian' value='LESBIAN' />
                  <Picker.Item label='Guy' value='GUY' />
                  <Picker.Item label='Bisexual' value='BISEXUAL' />
                  <Picker.Item label='Transgender' value='TRANSGENDER' />
                </Picker>
              </Row>
              <Divider />
              <TextInput
                value={data.me.status}
                label='Status'
                mode='outlined'
                style={s.input}
              />
              <Divider />
              <TextInput
                value={data.me.country}
                label='Country'
                mode='outlined'
                style={s.input}
              />
              <Divider />
              <TextInput
                value={data.me.city}
                label='City'
                mode='outlined'
                style={s.input}
              />
              <Divider />
              <Row>
                <Caption>Visible</Caption>
                <Switch
                  value={data.me.visible}
                />
              </Row>
            </View>
          )
        }}
      </MeComponent>
    </Page>
  )
}

export default withNavigation(Screen)
