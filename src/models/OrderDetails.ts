import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema({
    name: { type: String },
    history_ticket_categories: { type: Date },
    sum_ticket: { type: Number },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    ticket_categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'TicketCategorie' },
    createdAt: { type: Date, default: Date.now },
})

const OrderDetail = mongoose.model('Order', orderDetailSchema);

export default OrderDetail;
