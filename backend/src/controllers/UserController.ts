import {Request, Response} from "express";
import { UserUseCase } from "../use-case/UserUseCase";
import { User } from "../entities/User";

export class UserController{
    constructor(private userUseCase: UserUseCase){}

    async create(req: Request, res: Response): Promise<void>{
        const{name,email,password} = req.body;
    

        try{
            const user = await this.userUseCase.createUser({name,email,password});

            res.status(201).json(user);

        } catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ error: error.message });
            } else {
              res.status(400).json({ error: "An unknown error occurred" });
            }
        }
    }



    async list(req: Request, res: Response): Promise<void> {
        try {
          const users = await this.userUseCase.listUsers();
            res.status(200).json(users);
        } catch (error) {
          if (error instanceof Error) {
              res.status(500).json({ error: error.message });
          } else {
              res.status(500).json({ error: "An unknown error occurred" });
          }
        }
      }


      async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
    
        try {
            const user = await this.userUseCase.getUserById(Number(id));

            if (!user) {
                res.status(404).json({ error: "User not found" });
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "An unknown error occurred" });
            }
          }
      }
    
  


  
    
  
}