import mongoose from 'mongoose';
import { config } from './config.js';

export async function connectDB() {
  try {
    await mongoose.connect(config.db.uri);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  }
}