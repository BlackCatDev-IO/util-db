import mongoose from 'mongoose';

export class UtilDTO {
  data: any;
  log: any;
}

export const UtilSchema = new mongoose.Schema(
  {
    data: Object,
    log: Object,
  },
  { timestamps: true },
);
