import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
import UserData from "./data/UserData";

const userBusiness = new UserBusiness(new UserData());

const userController = new UserController(userBusiness)


const postBusiness = new PostBusiness(new PostData)
const postController = new PostController(postBusiness)

app.post("/signup", userController.singUp )
app.post("/login", userController.login )
app.post("/post", postController.createPost)

