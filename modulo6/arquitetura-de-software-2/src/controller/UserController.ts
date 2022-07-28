import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  public create = async (req: Request, res: Response):Promise<void> => {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const result = await new UserBusiness().getAll()

      res.status(200).send(result)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
