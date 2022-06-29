import app from "./app";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";

app.post("/signup", createUser)
app.post("/login", login);


