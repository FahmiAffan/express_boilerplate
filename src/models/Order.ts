import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: { type: String },
    date: { type: Date },
    status: { type: String },
    total_pay: { type: Number },
    total_order_ticket: { type: Number },
    createdAt: { type: Date, default: Date.now },
})

const Order = mongoose.model('Order', orderSchema);

export default Order;
