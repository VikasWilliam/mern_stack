import express from "express";

import { create, getAllUsers, getUser, update, deleteUser } from "../controller/userController.js";

const route = express.Router();
debugger

route.post("/user", create)
route.get("/users", getAllUsers)
route.get("/user/:id", getUser);
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser)

export default route;

