import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    stock: { type: Number },
    type: { type: String },
    status: { type: String, enum: ['new', 'old'] },
    expired: { type: String },
    alamat: { type: String },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    createdAt: { type: Date, default: Date.now },
})

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
