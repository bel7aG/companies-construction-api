import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class SpecialtyTypeDto {
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly description: string;
}
