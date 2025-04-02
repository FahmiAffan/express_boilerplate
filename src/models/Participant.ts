import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: [true, 'Email Has Been taken, Please Try Antoher Email Address'], require: [true, 'this field required'] },
    password: { type: String, minLength: [8, 'Password must be atleast 8 character'], require: [true, 'this field required'] },
    status: { type: String },
    active_code: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;
