import { Request, Response, NextFunction } from 'express'
import * as path from 'path'

export default function (req: Request, res: Response, next: NextFunction) {
  res.sendFile(path.join(__dirname + '/index.html'))
}
