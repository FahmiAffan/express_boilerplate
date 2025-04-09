import { login, register } from "interface/controller/Auth/AuthController.ts";
import { getUser, postUser } from "interface/controller/UserController.ts";
import express, { Request, Response } from "express";
import { getCategorie } from "interface/controller/categorie/CategorieControlller.ts";
import { createTalent, getAllTalent, getTalentByID } from "interface/controller/talent/TalentControlller.ts";
// import className from *; --> example import for cross module

const api = express.Router();
api.use('/v1/users', [getUser, postUser]);
api.use('/v1/auth', [login, register]);
api.use('/v1/categorie', [getCategorie]);
api.use('/v1/sub-categorie', [getCategorie]);
api.use('/v1/event', [getCategorie]);
api.use('/v1/participant', [getCategorie]);
api.use('/v1/talent', [getAllTalent, createTalent, getTalentByID]);

api.get("/", (req: Request, res: Response) => {
    res.send("Welcome to WEB MERN API !")
})

// api.use('/v1/test', [className]); --> example use router for cross module
export default api
