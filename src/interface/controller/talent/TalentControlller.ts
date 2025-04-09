import express, { Request, Response } from "express"
import BaseResponse from "interface/handler/BaseResponse.ts";
// import { checkImage } from "interface/handler/ImageHandler.ts";
import Talent from "models/Talent.ts";


// initialize response
const baseresponse = new BaseResponse;

// init router
const api = express.Router();

export const getAllTalent = api.get('/', async (req: Request, res: Response) => {
    const { keyword, page = 1, limit = 10 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    // const keyword = req.query
    let condition = {};


    try {
        if (keyword != null) {
            condition = { ...condition, name: { $regex: keyword, $options: 'i' } }
        }
        const result = await Talent.find(condition).skip(skip).limit(Number(limit));
        // const result = await Talent.find();
        console.log(result);
        return baseresponse.ok({ data: result }, 'Successfully Get Data', 200, res);
    } catch (err: any) {
        return baseresponse.error(null, err.message, 400, res);
    }
})

export const getTalentByID = api.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const page = 1, limit = 10

    try {

        const skip = (Number(page) - 1) * Number(limit);
        const result = await Talent.find({ id: id }).skip(skip).limit(Number(limit));
        // const result = await Talent.find();
        console.log(id);
        return baseresponse.ok({ data: result }, 'Successfully Get Data', 200, res);
    } catch (err: any) {
        return baseresponse.error(null, err.message, 400, res);
    }
})

export const createTalent = async (req: Request, res: Response) => {
    const { name, role, image } = req.body;

    try {
        // await checkImage(image);

        const data = await Talent.create(req.body);

        return baseresponse.ok(data, 'Successfully Get Data', 200, res);

    } catch (err: any) {
        return baseresponse.error(null, err.message, 400, res);
    }
}

export const updateTalent = async (req: Request, res: Response) => {
    try {
        const data = Talent.updateOne(req.body);
        return baseresponse.ok(data, "Successfully Update Data!", 201, res);
    } catch (err: any) {
        return baseresponse.error(null, err.message, 400, res);
    }
}