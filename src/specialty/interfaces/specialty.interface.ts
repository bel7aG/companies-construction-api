import { Document } from 'mongoose';

export interface Specialty extends Document {
  id?: string;
  name: string;
  description: string;
}
