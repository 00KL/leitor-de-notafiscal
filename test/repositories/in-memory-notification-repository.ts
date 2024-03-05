import { InvoiceRepository } from '../../src/application/repositories/invoice-repository';
import { Invoice } from '../../src/application/entities/invoice';

export class InMemoryInvoiceRepository implements InvoiceRepository {
  public invoices: Invoice[] = [];

  // async findById(InvoiceId: string): Promise<Invoice | null> {
  //   return this.Invoices.find((Invoice) => Invoice.id === InvoiceId) || null;
  // }

  async create(Invoice: Invoice): Promise<Invoice | null> {
    this.invoices.push(Invoice);
    return Invoice;
  }

  async findAll(): Promise<Invoice[]> {
    console.log(this.invoices);
    return this.invoices;
  }

  // async save(Invoice: Invoice): Promise<void> {
  //   const index = this.Invoices.findIndex((item) => item.id === Invoice.id);

  //   if (index >= 0) {
  //     this.Invoices[index] = Invoice;
  //   }
  // }

  // async countManyByRecipientId(recipientId: string): Promise<number> {
  //   return this.Invoices.filter(
  //     (Invoice) => Invoice.recipientId === recipientId,
  //   ).length;
  // }

  // async findManyByRecipientId(recipientId: string): Promise<Invoice[]> {
  //   return this.Invoices.filter(
  //     (Invoice) => Invoice.recipientId === recipientId,
  //   );
  // }
}
