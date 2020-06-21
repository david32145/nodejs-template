import {Request, Response} from "express"

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.status(200).json({ok: true})
  }
}

export default new UserController()
