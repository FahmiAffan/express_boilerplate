import { login, register } from "api/controller/Auth/AuthController.ts";
import { deleteTipeProperti, getProperti, getRawTransaksiproperti, getTipeProperti, getTransaksiproperti, mappingInsertProperti, postImageProperti, postProperti, postTipeProperti, postTransaksiproperti, setStatusProperti, updateProperti, updateTipeProperti } from "api/controller/PropertiController.ts";
import { getUser, postUser } from "api/controller/UserController.ts";
import express, { Request, Response } from "express";

const api = express.Router();
api.use('/v1/users', [getUser, postUser]);
api.use('/v1/auth', [login, register]);

api.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Perdi API !")
})

api.use('/v1/properti', [getProperti, postProperti, getTipeProperti, postTipeProperti, postImageProperti, getTransaksiproperti, postTransaksiproperti, getRawTransaksiproperti, deleteTipeProperti, updateTipeProperti, updateProperti, mappingInsertProperti, setStatusProperti]);

export default api
