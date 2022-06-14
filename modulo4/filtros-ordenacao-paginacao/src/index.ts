import { app } from "./app";
import { exercicio2 } from "./endpoints/exer2";
import { exercicio3 } from "./endpoints/exer3";
import { exercicio4 } from "./endpoints/exer4";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPathParamsTipo } from "./endpoints/getPathParamsTipo";
import { getQueryParamsNome } from "./endpoints/getQueryParamsNome";

app.get("/allusers", getAllUsers);
app.get("/users?", getQueryParamsNome);
app.get("/users/:tipo", getPathParamsTipo);
app.get("/exer2?", exercicio2);
app.get("/exer3?", exercicio3);
app.get("/exer4?", exercicio4);



