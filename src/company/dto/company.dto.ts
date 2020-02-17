import { ObjectType, Field, ID } from 'type-graphql';
import { SpecialtyTypeDto } from '../../specialty/dto/specialty.dto';
import { Specialty } from './../../specialty/interfaces/specialty.interface';

@ObjectType()
export class CompanyTypeDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly logo: string;

  @Field(() => [SpecialtyTypeDto])
  readonly specialties: Specialty[];

  @Field()
  readonly city: string;
}
