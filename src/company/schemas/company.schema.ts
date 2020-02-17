import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  logo: String,
  specialties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'specialty' }],
  city: String,
});
