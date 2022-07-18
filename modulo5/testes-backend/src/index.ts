import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { UserData } from "./data/UserData";

const userBusiness = new UserBusiness(new UserData());
const userController = new UserController(userBusiness)

app.get('/users/profile/:id', userController.getuserbyid)
