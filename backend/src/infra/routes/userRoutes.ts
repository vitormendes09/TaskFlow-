import {Router} from "express";
import {UserController} from "../../controllers/UserController";
import { CreateUserUseCase } from "../../use-case/user/CreateUserUseCase";
import { UserRepository } from "../../repositories/UserRepository";

const router = Router();
const userRepository = new UserRepository();
const usecaseUser = new CreateUserUseCase(userRepository);
const userController = new UserController(usecaseUser);

router.post("/users", userController.create.bind(userController));

export default router;