import mongoose from "mongoose";

const subCategorieSchema = new mongoose.Schema({
    name: { type: String },
    categorie: {type: mongoose.Schema.Types.ObjectId, ref: 'Categorie'},
    createdAt: { type: Date, default: Date.now },
})

const SubCategorie = mongoose.model('SubCategorie', subCategorieSchema);

export default SubCategorie;
