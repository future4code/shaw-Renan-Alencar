import app from "./app";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getUser from "./endpoints/getUser";

app.post("/user", createUser);


app.get('/user/:id', getUser);

app.put("/user/edit/:id", editUser);