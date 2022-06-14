import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPathParamsTipo } from "./endpoints/getPathParamsTipo";
import { getQueryParamsNome } from "./endpoints/getQueryParamsNome";

app.get("/allusers", getAllUsers);
app.get("/users?", getQueryParamsNome);
app.get("/users/:tipo", getPathParamsTipo);

