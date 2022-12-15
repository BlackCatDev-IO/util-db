import mongoose from 'mongoose';

export class UtilDTO {
  data: any;
}

export const UtilSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { timestamps: true },
);
