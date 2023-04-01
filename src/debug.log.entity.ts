import mongoose from 'mongoose';

export class DebugLogDTO {
  log: string;
}

export const DebugLogSchema = new mongoose.Schema(
  {
    log: String,
  },
  { timestamps: true },
);
