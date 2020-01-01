import AsyncStorage from '@react-native-community/async-storage'
import { MemoryStorage } from '@aws-amplify/core'

const MEMORY_KEY_PREFIX = '@MyStorage:'
type DataMemory = {
  [key: string]: string | null
}
let dataMemory: DataMemory = {}

export default class MyStorage {
  static syncPromise = null
  static setItem (key: string, value: string) {
    AsyncStorage.setItem(MEMORY_KEY_PREFIX + key, value).then(console.info).catch(console.warn)
    dataMemory[key] = value
    return dataMemory[key]
  }
  static getItem (key: string) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }
  static removeItem (key: string) {
    AsyncStorage.removeItem(MEMORY_KEY_PREFIX + key).then(console.info).catch(console.warn)
    return delete dataMemory[key]
  }
  static clear () {
    dataMemory = {}
    return dataMemory
  }
  static sync () {
    if (!(MemoryStorage as any).syncPromise) {
      (MemoryStorage as any).syncPromise = new Promise((res, rej) => {
        AsyncStorage.getAllKeys((errKeys, keys) => {
              if (errKeys) rej(errKeys)
              if (keys) {
                const memoryKeys = keys.filter((key) => key.startsWith(MEMORY_KEY_PREFIX))
                AsyncStorage.multiGet(memoryKeys, (err, stores) => {
                    if (err) rej(err)
                    if (stores) {
                      stores.map((result, index, store) => {
                        const key = store[index][0]
                        const value = store[index][1]
                        const memoryKey = key.replace(MEMORY_KEY_PREFIX, '')
                        dataMemory[memoryKey] = value
                      })
                    }
                    res()
                  }).then(console.info).catch(console.warn)
              }
            }).then(console.info).catch(console.warn)
      })
    }
    return (MemoryStorage as any).syncPromise
  }
}
