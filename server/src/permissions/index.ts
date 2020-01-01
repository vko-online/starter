import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'
import { Context } from '../context'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new Error('401')
    }
    return Boolean(userId)
  })
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    feed: rules.isAuthenticatedUser
  }
})
