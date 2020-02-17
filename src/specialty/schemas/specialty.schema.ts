import * as mongoose from 'mongoose';

export const SpecialtySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
});
