import { Photon } from '@generated/photon'
const photon = new Photon()

async function main () {
  await photon.users.deleteMany({})
  await photon.files.deleteMany({})
  await photon.users.create({
    data: {
      phone: '1',
      name: 'Medet',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      city: 'Almaty',
      country: 'Kazakhstan',
      gender: 'MALE',
      looking: 'FEMALE',
      images: {
        create: {
          mimetype: 'image/png',
          path: 'http://localhost:4000/upload/c2.png',
          size: 1000
        }
      },
      status: 'FRIENDS_WITH_BENEFITS',
      visible: true
    }
  })
  await photon.users.create({
    data: {
      phone: '2',
      name: 'Zarina',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      city: 'Almaty',
      country: 'Kazakhstan',
      gender: 'FEMALE',
      looking: 'MALE',
      images: {
        create: {
          mimetype: 'image/png',
          path: 'http://localhost:4000/upload/c1.png',
          size: 1000
        }
      },
      status: 'FRIENDS_WITH_BENEFITS',
      visible: true
    }
  })
  await photon.users.create({
    data: {
      phone: '3',
      name: 'Temirbek',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      city: 'Almaty',
      country: 'Kazakhstan',
      gender: 'MALE',
      looking: 'FEMALE',
      images: {
        create: {
          mimetype: 'image/png',
          path: 'http://localhost:4000/upload/c4.png',
          size: 1000
        }
      },
      status: 'FRIENDS_WITH_BENEFITS',
      visible: true
    }
  })
  await photon.users.create({
    data: {
      phone: '4',
      name: 'Aidana',
      password: '$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu', // "graphql"
      city: 'Almaty',
      country: 'Kazakhstan',
      gender: 'FEMALE',
      looking: 'MALE',
      images: {
        create: {
          mimetype: 'image/png',
          path: 'http://localhost:4000/upload/c3.png',
          size: 1000
        }
      },
      status: 'FRIENDS_WITH_BENEFITS',
      visible: true
    }
  })
}

// tslint:disable-next-line: no-floating-promises
main().finally(async () => {
  await photon.disconnect()
})
