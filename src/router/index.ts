import { login, register } from "api/controller/Auth/AuthController.ts";
import { getUser, postUser } from "api/controller/UserController.ts";
import express, { Request, Response } from "express";

const api = express.Router();
api.use('/v1/users', [getUser, postUser]);
api.use('/v1/auth', [login, register]);

api.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Perdi API !")
})

export default api
