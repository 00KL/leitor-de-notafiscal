import { Module } from '@nestjs/common';
import { InvoiceRepository } from 'src/application/repositories/invoice-repository';
import { MongooseInvoiceRepository } from './mongoose/repositories/mongoose-invoice-repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from './mongoose/schemas/Invoice.sheme';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
  ],
  controllers: [],
  providers: [
    {
      provide: InvoiceRepository,
      useClass: MongooseInvoiceRepository,
    },
  ],
  exports: [InvoiceRepository],
})
export class DatabaseModule {}
