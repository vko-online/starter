import { enumType } from 'nexus'

export const Gender = enumType({
  name: 'Gender',
  members: ['MALE', 'FEMALE', 'LESBIAN', 'GUY', 'BISEXUAL', 'TRANSGENDER']
})
