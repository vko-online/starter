import { enumType } from 'nexus'

export const Status = enumType({
  name: 'Status',
  members: ['FRIENDS_WITH_BENEFITS', 'DTF', 'OPEN_RELATIONSHIP', 'COMPLICATED', 'CHAT']
})
