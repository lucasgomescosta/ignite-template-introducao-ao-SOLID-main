import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface user {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const user = request.headers;

      let user_id: string = user.user_id as string;
      
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: "err" });
    }
  }
}

export { ListAllUsersController };
