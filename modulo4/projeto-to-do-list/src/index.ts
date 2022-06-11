import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getTask from "./endpoints/getTask";
import getTaskCreatorUserId from "./endpoints/getTaskCreatorUserId";
import getUser from "./endpoints/getUser";

app.post("/user", createUser);

app.post("/task", createTask);

app.get('/user/all', getAllUsers);

app.get('/user/:id', getUser);

app.get('/task/:id', getTask);

app.get('/task?', getTaskCreatorUserId);

app.put("/user/edit/:id", editUser);