import mongoose from 'mongoose';

export class UtilDTO {
  timeStamp: string | null;
  data: any;
}

export const UtilSchema = new mongoose.Schema({
  timeStamp: String,
  data: Object,
});
