// class User{
//     String nama_lengkap
//     String username
//     String password
//     Text avatar
//     String telp
//     Text alamat
// }

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    telp: { type: String },
    alamat: { type: String },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
})

const Users = mongoose.model('User', userSchema);

export default Users;
