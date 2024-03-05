import { Module } from '@nestjs/common';
import { InvoiceRepository } from 'src/application/repositories/invoice-repository';
import { InMemoryInvoiceRepository } from 'test/repositories/in-memory-notification-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: InvoiceRepository,
      useClass: InMemoryInvoiceRepository,
    },
  ],
  exports: [InvoiceRepository],
})
export class DatabaseModule {}
