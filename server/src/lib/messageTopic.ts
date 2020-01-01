import { PubSub } from 'graphql-subscriptions'
import mapAsyncIterator from '../lib/mapAsyncIterator'
const pubsub = new PubSub()

type MessageTopicEvent = 'create'
const MessageTopic = {
  identifier: 'postMessages',
  publish: async (message: any, event: MessageTopicEvent) => {
    console.log('message', message)
    // tslint:disable-next-line: no-floating-promises
    await pubsub.publish(MessageTopic.identifier, { message, event })
  },
  asyncIterator: () => {
    return mapAsyncIterator(
      pubsub.asyncIterator<{ message: any; event: MessageTopicEvent }>(
        MessageTopic.identifier
      ),
      value => {
        console.log('Event reason: ', value.event)
        return value.message
      }
    )
  }
}

export default MessageTopic
