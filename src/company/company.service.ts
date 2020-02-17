import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyInput } from './inputs/company.input';
import { Company } from './interfaces/company.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('company') private readonly companyModel: Model<Company>,
  ) {}

  async findAll(specialties: string[]): Promise<Company[]> {
    try {
      let companies = null;
      if (specialties.length) {
        const bySpecialty = specialties.map(id => mongoose.Types.ObjectId(id));
        companies = await this.companyModel
          .find({
            specialties: {
              $in: bySpecialty,
            },
          })
          .populate('specialties')
          .exec();
      } else {
        companies = await this.companyModel
          .find()
          .populate('specialties')
          .exec();
      }
      return companies;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async createCompany(companyInput: CompanyInput): Promise<Company> {
    try {
      const input = {
        ...companyInput,
        name: companyInput.name.toLowerCase(),
      };
      const company = new this.companyModel(input);
      return await company.save();
    } catch (error) {
      throw new ConflictException(`'${companyInput.name}' already exists.`);
    }
  }

  async deleteCompany(id: string): Promise<Company> {
    try {
      const chosenCompany = await this.companyModel.findByIdAndRemove(id);
      return chosenCompany;
    } catch {
      throw new NotFoundException(`Company not found.`);
    }
  }
}
