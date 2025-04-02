import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import BaseResponse from "../handler/BaseResponse.ts";

dotenv.config

const baseresponse = new BaseResponse();

export const CurrentUser = (token: string) => {
    try {
        const data = Jwt.verify(token, process.env.JWT_SECRET);

        return data;
    } catch (err: any) {
        return err
    }
}

export function RoutesMiddleware(role: Array<string>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.headers.authorization) {
                throw new Error("You Must Login")
            }

            const token = req.headers.authorization.split(' ')[1]
            const data = await CurrentUser(token);

            if (data.name == 'TokenExpiredError') {
                throw new Error(`Token is Expired at ${new Date(data.expiredAt).toDateString()}, current date is ${new Date(Date.now()).toDateString()}`);
            }

            if (data?.name) {
                throw new Error(data.message);
            }

            if (!role.includes(data.data.role)) {
                throw new Error(`Role ${data.data.role} not allowed`);
            }


            next();


        } catch (err: any) {
            return baseresponse.error({ errorMessage: err.message }, "Error Handle Request", 401, res);
        }
    }
}