import React from 'react'
import { View } from 'react-native'
import { TextInput, Divider, Button, HelperText } from 'react-native-paper'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { GuestHeader } from 'src/components/header'
import * as yup from 'yup'
import useForm from 'react-hook-form'
import { useLoginMutation } from 'src/generated/graphql'

const schema = yup.object().shape({
  phone: yup.string().required(),
  password: yup.string().required()
})
interface Form {
  phone: string
  password: string
}
interface Props {
  navigation: NavigationScreenProp<any>
}
function Screen ({ navigation }: Props) {
  const { register, setValue, setError, handleSubmit, errors, clearError } = useForm<Form>({
    validationSchema: schema
  })
  const [signup] = useLoginMutation()

  function handleSignup (values: Form) {
    signup({ variables: values })
      .then(async ({ data }) => {
        if (data) {
          clearError()
          await AsyncStorage.setItem('userToken', data.login.token)
          navigation.navigate('App')
        }
      })
      .catch(error => {
        setError('phone', 'api', error.message)
      })
  }

  return (
    <View>
      <GuestHeader title='Sign up' showBack />
      <View style={{ padding: 20 }}>
        <TextInput
          placeholder='Name'
          mode='outlined'
          ref={register({ name: 'name' })}
          onChangeText={value => setValue('name', value)}
        />
        {
          !!errors.name && (
            <HelperText
              type='error'
              visible
            >
              {errors.name.message}
            </HelperText>
          )
        }
        <TextInput
          placeholder='Phone'
          mode='outlined'
          ref={register({ name: 'phone' })}
          onChangeText={value => setValue('phone', value)}
        />
        {
          !!errors.phone && (
            <HelperText
              type='error'
              visible
            >
              {errors.phone.message}
            </HelperText>
          )
        }
        <TextInput
          placeholder='Password'
          mode='outlined'
          ref={register({ name: 'password' })}
          onChangeText={value => setValue('password', value)}
          secureTextEntry
        />
        {
          !!errors.password && (
            <HelperText
              type='error'
              visible
            >
              {errors.password.message}
            </HelperText>
          )
        }
        <View style={{ marginTop: 20 }}>
          <Button mode='contained' onPress={handleSubmit(handleSignup) as any}>
            Sign up
          </Button>
          <Divider style={{ marginVertical: 10 }} />
          {/* <Button onPress={() => navigation.navigate('Signup')}>Sign up</Button> */}
        </View>
      </View>
    </View>
  )
}

export default withNavigation(Screen)
