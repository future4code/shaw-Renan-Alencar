import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { createUser } from "./endpoints/createUser";
import { getAnotherProfile } from "./endpoints/getAnotherProfile";
import { getProfile } from "./endpoints/getProfile";
import { getRecipe } from "./endpoints/getRecipe";
import { login } from "./endpoints/login";

app.post("/signup", createUser)
app.post("/recipe", createRecipe)
app.post("/login", login);

app.get("/user/profile", getProfile);
app.get("/user/:id", getAnotherProfile);
app.get("/recipe/:id", getRecipe);





