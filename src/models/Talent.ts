import mongoose from "mongoose";

const talentSchema = new mongoose.Schema({
    name: { type: String },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer' },
    image: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
    createdAt: { type: Date, default: Date.now },
})

const Users = mongoose.model('Talent', talentSchema);

export default Users;
