import { Request, Response } from 'express'
import db from '@src/database'

class UserController {

  async createUser(req: Request, res: Response) {
    const {name, surname} = req.body
    const newUser = await db.query('INSERT INTO users (name, surname) values ($1, $2) RETURNING *', [name, surname])
    return res.status(200).json(newUser.rows[0])
  }

  async getUsers(req: Request, res: Response) {
    const users = await db.query('SELECT * FROM users')
    return res.status(200).json(users.rows)
  }

  async getOneUser(req: Request, res: Response) {
    return
  }
  async updateUser(req: Request, res: Response) {
    return
  }
  async deleteUser(req: Request, res: Response) {
    return
  }
}

export default new UserController()