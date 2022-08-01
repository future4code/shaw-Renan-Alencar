import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";


export const userRouter = express.Router();

const userBusiness = new UserBusiness()


const userController = new UserController(userBusiness)

userRouter.post("/create", userController.createUser);