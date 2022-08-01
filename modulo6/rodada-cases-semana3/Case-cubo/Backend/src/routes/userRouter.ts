import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";


export const userRouter = express.Router();


const userController = new UserController()

userRouter.post("/create", userController.createUser);