import BaseResponse from "interface/handler/BaseResponse.ts"
import express, { Request, Response, response } from "express"
import Users from "models/User.ts"

const api = express.Router()
const baseresponse = new BaseResponse();

export const getCategorie = api.get("/", async (req: Request, res: Response) => {
    try {
        // const data = { id_user: "", nama_user: "" };
        const data = await Users.find();
        // return new BaseResponse().ok(data, "halo", 200);
        res.status(200).json({ data: data, message: "success" })
        baseresponse.ok(data, "Success get data", 200, res);
    } catch (err: any) {
        baseresponse.error(null, err.message, err.status, res);
    }
})