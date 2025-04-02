import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    name: { type: String },
    status: { type: String },
    image: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
    organizer: {type: mongoose.Schema.Types.ObjectId, ref: 'Organizer'},
    createdAt: { type: Date, default: Date.now },
})

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
