import { Photon } from '@generated/photon'
import { PubSub } from 'graphql-subscriptions'
import { ContextParameters } from 'graphql-yoga/dist/types'

export const photon = new Photon()
const pubsub = new PubSub()

export interface Context {
  photon: Photon
  request: any
  pubsub: PubSub
}

export function createContext (request: ContextParameters) {
  return {
    ...request,
    photon,
    pubsub
  }
}
