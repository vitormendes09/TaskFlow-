import {Request, Response} from "express";
import { CreateUserUseCase } from "../use-case/user/CreateUserUseCase";

export class UserController{
    constructor(private userService: CreateUserUseCase){}

    async create(req: Request, res: Response): Promise<void>{
        const{name,email,password} = req.body;
    

        try{
            const user = await this.userService.createUser({name,email,password});

            res.status(201).json(user);

        } catch (error) {
            if (error instanceof Error) {
              res.status(400).json({ error: error.message });
            } else {
              res.status(400).json({ error: "An unknown error occurred" });
            }
        }
    }
}