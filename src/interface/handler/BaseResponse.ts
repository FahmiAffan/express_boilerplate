import express, { Response } from "express"


class BaseResponse {
    ok(data: Object | String, message: String, status: number, res: express.Response) {

        return res.status(status).json({
            ...data,
            message: message
        });
    }

    error(data: Object | String, message: String, status: number, res: express.Response) {
        return res.status(status).json({
            ...data,
            message: message
        });
    }
}

export default BaseResponse