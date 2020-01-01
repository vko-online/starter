import { GraphQLServer } from 'graphql-yoga'
import * as express from 'express'

import { permissions } from './permissions'
import { schema } from './schema'
import { createContext } from './context'
import Home from './app/home'

const server = new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions]
})

server.express.use('/upload', express.static('upload'))
server.express.get('/home', Home)
// tslint:disable-next-line: no-floating-promises
server.start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#5-using-the-graphql-api`
  )
)
