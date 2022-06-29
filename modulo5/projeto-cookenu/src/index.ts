import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getAnotherProfile } from "./endpoints/getAnotherProfile";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";

app.post("/signup", createUser)
app.post("/login", login);

app.get("/user/profile", getProfile);
app.get("/user/:id", getAnotherProfile);




