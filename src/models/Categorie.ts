import mongoose from "mongoose";
import Organizer from "./organizer.ts";

const categorieSchema = new mongoose.Schema({
    name: { type: String },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer' },
    createdAt: { type: Date, default: Date.now },
})

const Categorie = mongoose.model('Categorie', categorieSchema);

export default Categorie;
