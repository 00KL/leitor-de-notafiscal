import { Invoice } from '../entities/invoice';

export abstract class InvoiceRepository {
  abstract create(Invoice: Invoice): Promise<Invoice | null>;
  abstract findAll(): Promise<Invoice[]>;
  // abstract findById(Invoice: string): Promise<Invoice | null>;
  // abstract save(Invoice: Invoice): Promise<void>;
  // abstract countManyByRecipientId(recipientId: string): Promise<number>;
  // abstract findManyByRecipientId(recipientId: string): Promise<Invoice[]>;
}
