import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  async show(req: Request, res: Response) {
    const dataParam = req.query;
    const repository = getRepository(User);
    console.log(dataParam)
    try {
      if (dataParam.status) {
        console.log(dataParam.status)
        const users = await repository.find({
          select: [
            "id",
            "full_name",
            "cpf_number",
            "email",
            "phone",
            "zipcode",
            "current_balance",
            "status",
          ],
          where: { ...dataParam },
        });
        console.log(users)
        res.send(users);
      } else {
        console.log('entrou aqui')
        console.log(dataParam)
        const user = await repository.findOneOrFail(dataParam);
        console.log('user', user)
        res.send(user);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async update(req: Request, res: Response) {
    const { cpf_number } = req.params;
    const userData = req.body;
    console.log(userData)
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
