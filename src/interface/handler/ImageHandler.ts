import Image from "models/Image.ts"
import BaseResponse from "./BaseResponse.ts"

const baseResponse = new BaseResponse;

// export const checkImage = async (id: String) => {
//     try {
//         const res = await Image.findOne({ _id: id })

//         if (res) return baseResponse.error(null, "No Image Name With ID : " + id, 400);

//     } catch (err: any) {
//         return baseResponse.error(err.message, 400);
//     }
// }