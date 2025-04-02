import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String },
    date: { type: Date },
    about: { type: String },
    tagline: { type: String },
    keypoint: { type: String },
    venue_name: { type: String },
    status: { type: String, enum: [] },
    createdAt: { type: Date, default: Date.now },
})

const Event = mongoose.model('Event', eventSchema);

export default Event;
