import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveProperty,
} from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyTypeDto } from './dto/company.dto';
import { CompanyInput } from './inputs/company.input';
import { Company } from './interfaces/company.interface';
import { ID } from 'type-graphql';

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [CompanyTypeDto])
  async companies(
    @Args({ name: 'specialties', type: () => [ID] }) specialties: string[],
  ): Promise<Company[]> {
    return this.companyService.findAll(specialties);
  }

  @Mutation(() => CompanyTypeDto)
  async createCompany(@Args('input') input: CompanyInput): Promise<Company> {
    return this.companyService.createCompany(input);
  }

  @Mutation(() => CompanyTypeDto)
  async deleteCompany(@Args('id') id: string): Promise<Company> {
    return this.companyService.deleteCompany(id);
  }
}
