import { z } from "zod";

export const userAuthSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
})


// export function validateData(schema: z.ZodObject<any, any>) {
//     return (req: Request, res: Response, next: NextFunction) => {
//         try {
//             schema.parse(req.body);
//             next();
//         } catch (error) {
//             if (error instanceof ZodError) {
//                 const errorMessages = error.errors.map((issue: any) => ({
//                     message: `${issue.path.join('.')} is ${issue.message}`,
//                 }))
//                 res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
//             } else {
//                 res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
//             }
//         }
//     };
// }