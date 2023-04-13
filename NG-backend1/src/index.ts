import app from "./app";
import AccountController from "./controller/AccountController";
import TransictionController from "./controller/TransictionsController";
import { Usercontroller } from "./controller/UserController";

app.post("/user", new Usercontroller().signup)
app.post("/login", new Usercontroller().login)
app.get("/getAllUser", new Usercontroller().getAllUser)
app.put("/balance", new AccountController().putAccount)
app.get("/balance/:id", new AccountController().getBalance)
app.get("/transiction", new TransictionController().getTransitctions)
app.get("/debitTransiction", new TransictionController().getTransictionsDebit)
app.get("/creditTransiction", new TransictionController().getTransictionsCredit)