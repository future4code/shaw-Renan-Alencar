import { app } from "./app";
import { getAddress } from "./endpoints/getAddress";

app.get("/getAddress/:cep", getAddress);