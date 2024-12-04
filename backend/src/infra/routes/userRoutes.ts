import {Router} from "express";
import {UserController} from "../../controllers/UserController";
import { UserService } from "../../services/UserService";
import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";

const router = Router();
const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post("/users", userController.create.bind(userController));

export default router;