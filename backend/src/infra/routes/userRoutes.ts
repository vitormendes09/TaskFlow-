import {Router} from "express";
import {UserController} from "../../controllers/UserController";
import { UsecaseUser } from "../../use-case/UsecaseUser";
import { PrismaUserRepository } from "../../repositories/UserRepository";

const router = Router();
const userRepository = new PrismaUserRepository();
const usecaseUser = new UsecaseUser(userRepository);
const userController = new UserController(usecaseUser);

router.post("/users", userController.create.bind(userController));

export default router;