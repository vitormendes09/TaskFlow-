import { Router } from "express";

import { UserRepository } from "../repositories/UserRepository";

import { UserUseCase } from "../use-case/UserUseCase";
import{UserController} from "../controllers/UserController"

export function UserControllerFactory(): {router: Router; controller: UserController}{

    const userRepository = new UserRepository();
    const userUseCase = new UserUseCase(userRepository);
    const userController = new UserController(userUseCase);


    const router = Router();

    router.post("/users", userController.create.bind(userController));

    router.get("/users", userController.list.bind(userController) );

    router.get("/users/:id", userController.getById.bind(userController));


    return{ router, controller: userController}
}