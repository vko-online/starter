import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import API, { graphqlOperation } from '@aws-amplify/api'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
// import { createEvent } from 'src/graphql/mutations'
// import { listEvents } from 'src/graphql/queries'
// import { onCreateEvent } from 'src/graphql/subscriptions'
import Page from 'src/components/page'
import { H1, H2, H3, H4, Label, Description, Title, Subtitle } from 'src/components/typography' 

const initialState = { todos: [], user: null }
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, todos: action.todos }
    case 'USER':
      return { ...state, user: action.user }
    case 'SUBSCRIPTION':
      return { ...state, todos: [...state.todos, action.todo] }
    default:
      return state
  }
}

// async function createNewTodo () {
//   const todo = { title: 'Use AppSync' , description: 'Realtime and Offline' }
//   await API.graphql(graphqlOperation(createEvent, { input: todo }))
// }

function Index () {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    getUser().then(console.info).catch(console.warn)
  }, [])

  async function getUser () {
    const user = await Auth.currentAuthenticatedUser()
    dispatch({ type: 'USER', user })
  }
  return (
    <View style={styles.container}>
      <Page title='Apps' onPress={() => null}>
        <H1>test</H1>
        <H2>test</H2>
        <H3>test</H3>
        <H4>test</H4>
        <Label>test</Label>
        <Label muted>test</Label>
        <Title>test</Title>
        <Subtitle>test</Subtitle>
        <Description>Test</Description>
        {state.user && <Label>{state.user.attributes.email}</Label>}
        { state.todos.map((todo: any, i: number) => <Text key={todo.id}>{todo.name} : {todo.description}</Text>) }
      </Page>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withAuthenticator(Index)
