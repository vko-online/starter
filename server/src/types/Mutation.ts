import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { idArg, mutationType, stringArg, arg, booleanArg } from 'nexus'
import { APP_SECRET, getUserId } from '../utils'
import { save, remove } from '../lib/fileApi'

export const Mutation = mutationType({
  definition (t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        phone: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (_parent, { name, phone, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.photon.users.create({
          data: {
            name,
            phone,
            password: hashedPassword
          }
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user
        }
      }
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        phone: stringArg({ nullable: false }),
        password: stringArg({ nullable: false })
      },
      resolve: async (_parent, { phone, password }, context) => {
        const user = await context.photon.users.findOne({
          where: {
            phone
          }
        })
        if (!user) {
          throw new Error(`No user found for phone: ${phone}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user
        }
      }
    })

    t.field('update', {
      type: 'User',
      args: {
        birthdate: arg({ type: 'DateTime', nullable: true }),
        name: stringArg({ nullable: true }),
        status: arg({ type: 'Status', nullable: true }),
        looking: arg({ type: 'Gender', nullable: true }),
        gender: arg({ type: 'Gender', nullable: true }),
        visible: booleanArg({ nullable: true }),
        country: stringArg({ nullable: true }),
        city: stringArg({ nullable: true }),
        images: arg({ type: 'Upload', nullable: true, list: true })
      },
      resolve: async (parent, args, ctx) => {
        const userId = getUserId(ctx)
        let normalizedFiles = []
        if (args.images) {
          const normalizedImages = await args.images.map(async v => save(v))
          const files = normalizedImages.map(async v => ctx.photon.files.create({ data: await v }))
          normalizedFiles = await Promise.all(files)
        }
        const normalized = Object.keys(args).filter(v => v !== 'images').reduce((all, key) => {
          if (args[key]) {
            all[key] = args[key]
          }
          return all
        }, {})
        return ctx.photon.users.update({
          where: {
            id: userId
          },
          data: {
            ...normalized,
            images: {
              connect: normalizedFiles
            }
          }
        })
      }
    })
  }
})
