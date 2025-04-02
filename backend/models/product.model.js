import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //? created at and updated at
  }
);

const Product = mongoose.model("Product", productSchema); //? mongoose is going to create a collection called products but convention needs us to call it "Product" singular, capital first letter
export default Product;
