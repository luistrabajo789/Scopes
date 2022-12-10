import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, reqired: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    complete: { type: String, required: false },
    image:{type:String, default:null }
  },
  {
    timestamps: true,
  }
);

const users = mongoose.models.users || mongoose.model("users", UserSchema);

export default users;
