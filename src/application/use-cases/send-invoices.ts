import { Injectable } from '@nestjs/common';
import { Invoice } from '../entities/invoice';
import { InvoiceRepository } from '../repositories/invoice-repository';
import { InvoiceMapper } from '../mappers/invoice-mappers';

interface SendInvoiceRequest {
  invoiceRawJsonArray: any;
}

interface SendInvoiceResponse {
  invoiceArray: Invoice[];
}

@Injectable()
export class SendInvoices {
  constructor(private invoiceRepository: InvoiceRepository) {}

  async execute(
    sendInvoiceRequest: SendInvoiceRequest,
  ): Promise<SendInvoiceResponse> {
    const invoiceRawJsonArray = sendInvoiceRequest.invoiceRawJsonArray;

    const invoices: Invoice[] = [];

    for (const invoiceRawJson of invoiceRawJsonArray) {
      const invoice = InvoiceMapper.httpToDomain(invoiceRawJson);
      invoices.push(invoice);
    }

    for (const invoice of invoices) {
      await this.invoiceRepository.create(invoice);
    }

    return { invoiceArray: invoices };
  }
}
