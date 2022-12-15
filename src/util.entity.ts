import mongoose from 'mongoose';

export class UtilDTO {
  data: any;
  timerange: { beforeUTC: string; afterUTC: string };
}

export const UtilSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { timestamps: true },
);
