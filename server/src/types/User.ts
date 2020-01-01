import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition (t) {
    t.model.id()
    t.model.name()
    t.model.phone()
    t.model.country()
    t.model.city()
    t.model.gender()
    t.model.images({ pagination: false })
    t.model.looking()
    t.model.status()
    t.model.birthdate()
    t.model.visible()
  }
})
