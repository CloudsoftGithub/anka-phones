import mongoose, { Schema, models, model } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
const ProductSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default models.Products || model("Products", ProductSchema);
