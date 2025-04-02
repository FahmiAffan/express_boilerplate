import BaseResponse from "interface/handler/BaseResponse.ts"
import express, { Request, Response, response } from "express"
import Users from "models/User.ts"

const api = express.Router()
export const getUser = api.get("/", async (req: Request, res: Response) => {
    try {
        // const data = { id_user: "", nama_user: "" };
        const data = await Users.find();
        // return new BaseResponse().ok(data, "halo", 200);
        res.status(200).json({ data: data, message: "success" })
    } catch (err: any) {
        res.status(400).json({
            message: "Error get user",
            error: err
        })
    }
}
)

export const postUser = api.post("/", async (req: Request, res: Response) => {
    // const trx: Transaction = await sequelize.transaction();
    try {
        // const user = await Users.create({
        //     username: request.username,
        //     role: request.role,
        //     password: request.password
        // });
        const user = await Users.create(req.body)
        // trx.commit();

        return res.status(200).json({
            message: "Succesfully Post Data",
            // data: user,
            status: 200
        })

    } catch (err: any) {
        // trx.rollback();
        res.status(400).json({
            message: "Error Post Data",
            errorMessage: err.message,
        })
        console.log(err.message)
    }
})