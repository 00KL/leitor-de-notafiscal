import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InvoiceController } from './controllers/invoice.controller';
import { SendInvoices } from 'src/application/use-cases/send-invoices';
import { FindAllInvoices } from 'src/application/use-cases/findAll-invoices';

@Module({
  imports: [DatabaseModule],
  controllers: [InvoiceController],
  providers: [SendInvoices, FindAllInvoices],
})
export class HttpModule {}
