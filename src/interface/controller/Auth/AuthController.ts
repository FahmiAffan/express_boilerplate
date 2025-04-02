import BaseResponse from "interface/handler/BaseResponse.ts"
import Users from "models/User.ts"
import Jwt from "jsonwebtoken";
import express, { Request, response, Response } from 'express';
import dotenv from "dotenv";
import bcrypt from 'bcrypt';
import { validateData } from "../../validators/Schema/ValidationSchema.ts";
import { userAuthSchema } from "../../validators/Schema/UserSchema.ts";

dotenv.config();

const baseresponse = new BaseResponse();

const api = express.Router();

export const login = api.post("/login", validateData(userAuthSchema), async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const Authorization = await Users.findOne({ where: { username: username } });
        const Authentication = await bcrypt.compare(password, Authorization?.password);
        let token = null;

        if (Authentication) {
            token = Jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: Authorization
            }, process.env.JWT_SECRET);
        }

        return res.json({
            data: token,
            message: "success",
            result: Authentication
        });
    } catch (err: any) {
        return res.json({
            message: "error",
            error: err.message
        })
    }
})

export const register = api.post("/register", async (req: Request, res: Response) => {
    try {
        const allReq = req.body;
        const encryptedPassword = bcrypt.hashSync(req.body.password, 8);

        allReq.password = encryptedPassword;
        allReq.role = 'guest';
        const data = await Users.create(allReq);
        // console.log(allReq);
        return res.json({
            message: "",
            data: data
        });
    } catch (err: any) {
        return res.json({
            message: "",
            data: err.message
        });
    }
})

export const currentUser = api.post('/currentUser', async (req: Request, res: Response) => {
    try {
        // const data = 
    } catch (err: any) {

    }
})

export const logout = api.post("/logout", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const data = Jwt.verify(token, process.env.JWT_SECRET);

        console.log(data);
        return res.json({
            data: data,
            message: "success",
        });
    } catch (err: any) {

    }
})