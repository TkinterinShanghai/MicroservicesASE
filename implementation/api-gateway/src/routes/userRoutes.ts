import express from "express";
import UsersService from "../controllers/UsersService";

const userRouter = express.Router();

userRouter.post("/signup", UsersService.createUser);
userRouter.get("/login", UsersService.fetchUser);

export default userRouter 
