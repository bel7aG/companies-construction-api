import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bel7aG:belhassen123@cleverenv-zsr5e.mongodb.net/construction-companies?retryWrites=true&w=majority',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schemas.gql',
      context: ({ req }) => ({ req }),
      cors: {
        origin: true,
        credentials: true,
      },
      path: '/',
    }),
    CompanyModule,
    SpecialtyModule,
  ],
})
export class AppModule {}
