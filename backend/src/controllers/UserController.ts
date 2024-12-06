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


    async getId(req:Request, res: Response, user:User): Promise<User>{

      const {name,emial,password} = req.body;


      try{
        const user = await this.userUseCase.getUserId({User});

        res.status(201).json(user);
      
      } catch(error){

        if (error instanceof Error) {
          res.status(400).json({ error: error.message });
        } else {
          res.status(400).json({ error: "An unknown error occurred" });
        }

      }


      return user;
    }



    async listUser(req:Request, res: Response){
      
        try{
          const user = await this.userUseCase.ListUser();

          res.status(201).json(user)
        } catch(error){

          if (error instanceof Error) {
            res.status(400).json({ error: error.message });
          } else {
            res.status(400).json({ error: "An unknown error occurred" });
          }
  
        };

    
    };
}