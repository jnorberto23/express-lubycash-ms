import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  async show(req: Request, res: Response) {
    
    const dataParam = req.query;
    console.log('show', dataParam)
    const repository = getRepository(User);
    try {
      const user = await repository.findOneOrFail(dataParam);
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async update(req: Request, res: Response) {
    const { cpf } = req.params;
    const userData = req.body;

    const repository = getRepository(User);
    try {
      const user = await repository.update(
        { cpf_number: cpf },
        { ...userData }
      );

      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new UserController();
