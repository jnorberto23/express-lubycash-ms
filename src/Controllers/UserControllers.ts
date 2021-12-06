import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserControllers {
  public async Store(req: Request, res: Response) {
    const data = req.body;
    const newUser = await prisma.user
      .create({ data })
      .then(() => {
        res.send(newUser);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}

export default new UserControllers();
