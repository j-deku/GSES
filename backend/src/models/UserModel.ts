import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";

export interface IUser extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  role: string;
  password?: string;
  avatar?: string;
  cartData: Record<string, any>;
//  googleId?: string;
  verified: boolean;
  message: string;
}

const userSchema = new Schema<IUser>(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: { type: String, enum:["admin", "user"], default: "user" },
    password: { type: String },
    avatar: { type: String },
    cartData: { type: Object, default: {} },
 //   googleId: { type: String, unique: true, sparse: true, },
    verified: { type: Boolean, default: false },
    message: {type: String}
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
