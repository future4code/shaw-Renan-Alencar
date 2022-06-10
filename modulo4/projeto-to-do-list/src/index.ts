import app from "./app";
import createUser from "./endpoints/createUser";
import getUser from "./endpoints/getUser";

app.get('/user/:id', getUser);

app.post("/user", createUser);