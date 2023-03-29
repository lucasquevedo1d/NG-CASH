import app from "./app";
import { Usercontroller } from "./controller/UserController";

app.post("/user", new Usercontroller().signup)