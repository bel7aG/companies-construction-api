import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from './company.service';
import { CompanySchema } from './schemas/company.schema';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'company',
        schema: CompanySchema,
        collection: 'companies',
      },
    ]),
  ],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
