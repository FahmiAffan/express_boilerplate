import { login, register } from "interface/controller/Auth/AuthController.ts";
import { getUser, postUser } from "interface/controller/UserController.ts";
import express, { Request, Response } from "express";
// import className from *; --> example import for cross module

const api = express.Router();
api.use('/v1/users', [getUser, postUser]);
api.use('/v1/auth', [login, register]);

api.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Perdi API !")
})

// api.use('/v1/test', [className]); --> example use router for cross module
api.use
export default api
