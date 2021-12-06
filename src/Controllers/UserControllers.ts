import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

class UserControllers {
  public async Store(req: Request, res: Response) {
    const data = req.body;
    try {
      const newUser = await prisma.user.create({ data });
      res.send(newUser);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          res.status(400).send({
            errors: [
              {
                msg: "O usuário não pode ser criado, visto que há uma violação de valor unico.",
                param: err.meta?.target[0],
                location: "body",
              },
            ],
          });
        }
      }
    }
  }
}

export default new UserControllers();
