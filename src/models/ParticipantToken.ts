import mongoose from "mongoose";

const participantTokenSchema = new mongoose.Schema({
    name: { type: String },
    token: { type: String },
    refresh_token: { type: String },
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant' },
    createdAt: { type: Date, default: Date.now },
})

const ParticipantToken = mongoose.model('Talent', participantTokenSchema);

export default ParticipantToken;
