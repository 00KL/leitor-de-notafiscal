import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../repositories/invoice-repository';
import { Invoice } from '../entities/invoice';

@Injectable()
export class FindAllInvoices {
  constructor(private invoiceRepository: InvoiceRepository) {}

  async execute(): Promise<Invoice[]> {
    return this.invoiceRepository.findAll();
  }
}
