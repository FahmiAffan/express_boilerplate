import mongoose from "mongoose";

const userTokenSchema = new mongoose.Schema({
    name: { type: String },
    token: { type: String },
    refresh_token: { type: String },
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant' },
    createdAt: { type: Date, default: Date.now },
})

const UserToken = mongoose.model('Talent', userTokenSchema);

export default UserToken;
