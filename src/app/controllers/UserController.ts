import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const data = req.body;
    console.log(data);
    try {
      data.status = "refused";
      const user = repository.create({ ...data });
      await repository.save(user);
      res.send(user)
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

export default new UserController();
