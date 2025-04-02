import mongoose from "mongoose";

const participantPassSchema = new mongoose.Schema({
    name: { type: String },
    alamat: { type: String },
    code: { type: String },
    status: { type: String },
    active_code: { type: String },
    participant: {type: mongoose.Schema.Types.ObjectId, ref: 'Participant'},
    createdAt: { type: Date, default: Date.now },
})

const ParticipantPassword = mongoose.model('ParticipantPassword', participantPassSchema);

export default ParticipantPassword;
