import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { SpecialtyTypeDto } from './dto/specialty.dto';
import { Specialty } from './interfaces/specialty.interface';
import { SpecialtyService } from './specialty.service';
import { SpecialtyInput } from './inputs/specialty.input';

@Resolver('Specialty')
export class SpecialtyResolver {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Query(() => [SpecialtyTypeDto])
  async specialties(): Promise<Specialty[]> {
    return this.specialtyService.findAll();
  }

  @Mutation(() => SpecialtyTypeDto)
  async createSpecialty(
    @Args('input') input: SpecialtyInput,
  ): Promise<Specialty> {
    return this.specialtyService.createSpecialty(input);
  }

  @Mutation(() => SpecialtyTypeDto)
  async deleteSpecialty(@Args('id') id: string): Promise<Specialty> {
    return this.specialtyService.deleteSpecialty(id);
  }
}
