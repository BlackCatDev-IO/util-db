import mongoose from "mongoose";

export class UtilDTO {
  data: string;
}

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});