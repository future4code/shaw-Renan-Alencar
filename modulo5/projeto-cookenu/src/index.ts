import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";

app.post("/signup", createUser)
app.post("/login", login);

app.get("/user/profile", getProfile);



