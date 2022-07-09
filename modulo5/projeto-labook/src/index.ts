import FriendBusiness from "./business/FriendBusiness";
import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import FriendController from "./controller/FriendController";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import FriendData from "./data/FriendData";
import PostData from "./data/PostData";
import UserData from "./data/UserData";

const userBusiness = new UserBusiness(new UserData());
const userController = new UserController(userBusiness)

const postBusiness = new PostBusiness(new PostData())
const postController = new PostController(postBusiness)

const friendBusiness = new FriendBusiness(new FriendData())
const friendController = new FriendController(friendBusiness)


app.post("/signup", userController.singUp )
app.post("/login", userController.login )
app.post("/post", postController.createPost)

app.get("/post/:id", postController.getPostById)

app.put("/user/follow", friendController.followFriend)


