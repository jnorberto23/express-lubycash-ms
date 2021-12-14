import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  async show(req: Request, res: Response) {
    const dataParam = req.query;
    const repository = getRepository(User);
    try {
      if (dataParam) {
        const users = await repository.find({
          select: [
            "id",
            "full_name",
            "cpf_number",
            "email",
            "password",
            "phone",
            "zipcode",
            "current_balance",
            "status",
          ],
          where: { ...dataParam },
        });
        res.send(users);
      } else {
        const users = await repository.find();
        res.send(users);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async update(req: Request, res: Response) {
    const { cpf_number } = req.params;
    const userData = req.body;
    const repository = getRepository(User);
    try {
      const user = await repository.update(
        { cpf_number },
        { ...userData.data }
      );

      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new UserController();
