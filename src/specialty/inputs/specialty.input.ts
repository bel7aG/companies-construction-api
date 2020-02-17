import { InputType, Field } from 'type-graphql';

@InputType()
export class SpecialtyInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;
}
