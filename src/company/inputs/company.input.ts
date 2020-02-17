import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class CompanyInput {
  @Field()
  readonly name: string;

  @Field()
  readonly logo: string;

  @Field(() => [ID])
  readonly specialties: string[];

  @Field()
  readonly city: string;
}
