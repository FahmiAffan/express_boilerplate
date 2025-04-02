import { Response } from "express"

class BaseResponse {
    ok(data: Object, message: String, status: number) {
        return async (res: Response) => {
            return res.json({
                data: data,
                message: message
            }).status(status);
        }
    }
    
    error(message: String, status: number) {
        return async (res: Response) => {
            return res.json({
                message: message
            }).status(status);
        }
    }
}

export default BaseResponse