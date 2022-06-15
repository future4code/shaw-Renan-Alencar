import { app } from "./app";
import { getAddress } from "./endpoints/getAddress";
import { insertAddress } from "./endpoints/insertAddress";

app.get("/getAddress/:cep", getAddress);

app.post("/insertAddress/:cep", insertAddress)