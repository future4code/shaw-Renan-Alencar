import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";


export const userRouter = express.Router();

const userBusiness = new UserBusiness(
  new IdGenerator(),
  new UserDatabase()
)

const userController = new UserController(userBusiness)

userRouter.get("/", userController.getAllUsers);
userRouter.post("/create", userController.createUser);
userRouter.delete("/delete/:id", userController.deleteUser);

