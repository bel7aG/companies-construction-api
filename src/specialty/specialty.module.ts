import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialtyResolver } from './specialty.resolver';
import { SpecialtyService } from './specialty.service';
import { SpecialtySchema } from './schemas/specialty.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'specialty',
        schema: SpecialtySchema,
        collection: 'specialties',
      },
    ]),
  ],
  providers: [SpecialtyService, SpecialtyResolver],
})
export class SpecialtyModule {}
