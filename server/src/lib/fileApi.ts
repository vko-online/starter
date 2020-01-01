import * as uuidv4 from 'uuid/v4'
import * as mime from 'mime-types'
import * as path from 'path'
import * as fs from 'fs'

const UPLOAD_DIR = '../../upload'

interface FileUpload {
  createdAt: Date
  size: number
  path: string
  mimetype: string
}

export function save ({ stream, mimetype }): Promise<FileUpload> {
  const id = `${uuidv4()}.${mime.extension(mimetype)}`
  const filePath = path.join(__dirname, UPLOAD_DIR, id)
  let size = 0
  return new Promise((resolve, reject) =>
    stream
      .on('error', error => {
        if (stream.truncated) {
          // Delete the truncated file
          fs.unlinkSync(filePath)
        }
        reject(error)
      })
      .pipe(fs.createWriteStream(filePath))
      .on('data', chunk => {
        size += chunk.length
      })
      .on('finish', () => {
        const file: FileUpload = {
          createdAt: new Date(),
          path: `/upload/${id}`,
          size,
          mimetype
        }

        resolve(file)
      })
  )
}

export function remove (id) {
  return new Promise((resolve, reject) => {
    fs.unlink(path.join(__dirname, UPLOAD_DIR, id), (err) => {
      if (err) reject(err)
      resolve(id)
    })
  })
}

// DON'T CALL THIS IN PRODUCTION !!!
export function flush () {
  return new Promise((resolve, reject) => {
    const directory = path.join(__dirname, UPLOAD_DIR)
    fs.readdir(directory, (err, files) => {
      if (err) reject(err)

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) reject(err)
        })
      }
      resolve()
    })
  })
}
