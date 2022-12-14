import mongoose from 'mongoose';

export class UtilDTO {
  timestamp: string | null;
  data: any;
}

export const UtilSchema = new mongoose.Schema({
  timestamp: String,
  data: Object,
});
