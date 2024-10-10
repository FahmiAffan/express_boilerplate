import BaseResponse from "api/BaseResponse.ts"
import Users from "models/User.ts"
import Jwt from "jsonwebtoken";
import express, { Request, response, Response } from 'express';
import dotenv from "dotenv";
import bcrypt from 'bcrypt';
import { validateData } from "../Schema/ValidationSchema.ts";
import { userAuthSchema } from "../Schema/UserSchema.ts";

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
            token = Jwt.sign(JSON.stringify(Authorization), process.env.JWT_SECRET);
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