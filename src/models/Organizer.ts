import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
    name: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Organizer = mongoose.model('Organizer', organizerSchema);

export default Organizer;
