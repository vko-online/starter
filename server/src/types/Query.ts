import { idArg, queryType, stringArg, intArg } from 'nexus'
import { getUserId } from '../utils'

export const Query = queryType({
  definition (t) {

    t.field('me', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        if (userId) {
          return ctx.photon.users.findOne({
            where: {
              id: userId
            }
          })
        }
        throw new Error('Not authenticated')
      }
    }),

    t.list.field('feed', {
      type: 'User',
      resolve: async (parent, args, ctx) => {
        const userId = getUserId(ctx)
        const user = await ctx.photon.users.findOne({
          where: {
            id: userId
          }
        })
        const users = await ctx.photon.users.findMany({
          where: {
            country: user.country,
            city: user.city,
            gender: user.looking,
            visible: true
          }
        })

        return users
      }
    })
  }
})
