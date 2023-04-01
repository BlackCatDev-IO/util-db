import mongoose from 'mongoose';

export class DebugLogDTO {
  log: string;
  device: string;
  os: string;
  appVersion: string;
}

export const DebugLogSchema = new mongoose.Schema(
  {
    log: String,
    device: String,
    os: String,
    appVersion: String,
  },
  { timestamps: true },
);
