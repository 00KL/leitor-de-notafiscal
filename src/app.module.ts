import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/invoice_db'),
    HttpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
