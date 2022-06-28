import app from "./app"
// import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/loginUser"

app.post('/user/signup', createUser)
app.post('/user/login', login)


// app.put('/user/edit/:id', editUser)