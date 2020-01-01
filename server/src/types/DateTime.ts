import { GraphQLDate } from 'graphql-iso-date'
import { asNexusMethod } from 'nexus'

export const DateTime = GraphQLDate
export const GQLDate = asNexusMethod(GraphQLDate, 'date')
