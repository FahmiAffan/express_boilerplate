
// export const getImageProperti = api.get("/", async (req: Request, res: Response) => {
//     try {
//         const decrypt_id = dec(req.query.id_properti);
//         req.query.id_properti = decrypt_id;
//         const data = await ImageProperti.findAll({
//             where: req.query
//         });

//         console.log(data, decrypt_id);
//         if (decrypt_id == "") {
//             return baseresponse.error({ error: "Invalid" }, "Success get Image Properti", 200, res);
//         } else {
//             return baseresponse.ok({ data }, "Success get Image Properti", 200, res);
//         }

//     } catch (err: any) {
//         return baseresponse.error({ error: err.message }, "Success get Image Properti", 200, res);
//     }
// })

// export const postImageProperti = api.post("/", validateData(ImagePropertiSchema), async (req: Request, res: Response) => {
//     try {

//         const path = 'Properti'

//         const decrypt_id = dec(req.body.id_properti);

//         const uploadFile = FileHandler(req.body.data, 'text/plain', path, req.body.fileName);

//         const allReq = req.body

//         allReq.fileName = uploadFile.name
//         allReq.data =  `images/${path + '/' + uploadFile.name}`
//         allReq.id_properti = decrypt_id

//         const data = await ImageProperti.create(allReq);

//         if (uploadFile) {
//             return baseresponse.ok({ data }, "Success add Image Properti", 201, res);
//         } else {
//             return baseresponse.error({ data }, "Internal Server Error When add Image Properti", 400, res);
//         }

//     } catch (error: any) {
//         return baseresponse.error({ error: error.message }, "Internal Server Error When add Image Properti", 400, res);
//     }
// })

// export const deleteImageProperti = api.delete("/:id", async (req: Request, res: Response) => {
//     try {
//         const data = await ImageProperti.destroy({ where: { "id_image_properti": req.params.id } });
//         res.json({ "data": data, "message": "success" });
//     } catch (error: any) {
//         res.json({ "error": error.message, "message": "failed" })
//     }
// })

// export const updateImageProperti = api.put("/imageProperti/:id", validateData(TipePropertiSchema), async (req: Request, res: Response) => {
//     try {
//         const data = ImageProperti.findOne({ where: { "id_image_properti": req.params.id } });
//         if (data == null || data == undefined) {
//             res.json({ "error": "Selected Data is invalid", "message": "failed" }).status(400);
//         } else {
//             await ImageProperti.update(req.body, { where: { "id_image_properti": req.params.id } });
//             res.json({ "message": "success" });
//         }
//     } catch (error: any) {
//         res.json({ "error": error.message, "message": "failed" }).status(400)
//     }
// })