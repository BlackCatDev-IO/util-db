import mongoose from 'mongoose';

export class UtilDTO {
  data: string;
}

export const UtilSchema = new mongoose.Schema({
  name: String,
});
