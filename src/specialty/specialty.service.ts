import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Specialty } from './interfaces/specialty.interface';
import { SpecialtyInput } from './inputs/specialty.input';

@Injectable()
export class SpecialtyService {
  constructor(
    @InjectModel('specialty') private readonly specialtyModel: Model<Specialty>,
  ) {}

  async findAll(): Promise<Specialty[]> {
    try {
      const specialties = await this.specialtyModel.find().exec();
      return specialties;
    } catch {
      throw new InternalServerErrorException(`Please try later.`);
    }
  }

  async createSpecialty(specialtyInput: SpecialtyInput): Promise<Specialty> {
    try {
      const input = {
        ...specialtyInput,
        name: specialtyInput.name.toLowerCase(),
      };
      const specialty = new this.specialtyModel(input);
      return await specialty.save();
    } catch (error) {
      throw new ConflictException(`'${specialtyInput.name}' already exists.`);
    }
  }

  async deleteSpecialty(id: string): Promise<Specialty> {
    try {
      const chosenSpecialty = await this.specialtyModel.findByIdAndRemove(id);
      return chosenSpecialty;
    } catch {
      throw new NotFoundException(`Specialty not found.`);
    }
  }
}
