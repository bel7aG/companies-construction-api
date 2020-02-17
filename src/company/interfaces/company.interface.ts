import { Document } from 'mongoose';
import { Specialty } from './../../specialty/interfaces/specialty.interface';

export interface Company extends Document {
  id: string;
  name: string;
  logo: string;
  specialties: Specialty[];
  city: string;
}
