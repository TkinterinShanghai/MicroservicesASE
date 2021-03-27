import express from "express";
import { User } from "../db/models";
import generateUUID from "../helpers/generateUUID";
import hashPassword from "../helpers/hashPassword";

const userRoutes = express.Router();

userRoutes.post("/users", async (req, res, next) => {
  console.log("this is the body:", req.body);
  if (!req.body || !req.body.email || !req.body.password) {
    return next(new Error("Invalid body!"));
  }

  try {
    const newUser = await User.create({
      email: req.body.email,
      id: generateUUID(),
      passwordHash: hashPassword(req.body.password),
    });
    return res.json(newUser);
  } catch (e) {
    return next(e);
  }
});

userRoutes.get("/users/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return next(new Error("Invalid user ID"));

    return res.json(user);
  } catch (e) {
    return next(e);
  }
});

export default userRoutes;
