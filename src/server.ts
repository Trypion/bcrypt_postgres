import express from "express";
import UserController from "./controllers/UserController";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const userController = new UserController();

app.get("/insert", userController.insert);
app.get("/check", userController.checkPassword);

app.listen(3333);
