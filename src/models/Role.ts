import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Role = mongoose.model('Role', roleSchema);

export default Role;
