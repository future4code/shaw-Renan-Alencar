import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getTask from "./endpoints/getTask";
import getUser from "./endpoints/getUser";

app.post("/user", createUser);

app.post("/task", createTask);

app.get('/user/:id', getUser);

app.get('/task/:id', getTask);

app.put("/user/edit/:id", editUser);