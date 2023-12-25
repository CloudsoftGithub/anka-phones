import mongoose, { Schema, models, model } from "mongoose";
mongoose.connect(process.env.MONGODB_URL);
const ProductSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    imgUrl: String,
  },
  { timestamps: true }
);

export default models.Products || model("Products", ProductSchema);
