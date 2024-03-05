import { InvoiceRepository } from 'src/application/repositories/invoice-repository';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice as InvoiceModel } from '../schemas/Invoice.sheme';
import { Invoice } from 'src/application/entities/invoice';
import { MongooseInvoiceMapper } from '../mappers/mongoose-invoice-mapper';

import { Model } from 'mongoose';

export class MongooseInvoiceRepository extends InvoiceRepository {
  constructor(
    @InjectModel(InvoiceModel.name) private invoiceModel: Model<InvoiceModel>,
  ) {
    super();
    this.invoiceModel = invoiceModel;
  }
  async create(invoice: Invoice): Promise<Invoice | null> {
    console.log(invoice);
    const invoiceModel = MongooseInvoiceMapper.toPersistence(invoice);
    const createdInvoice = await this.invoiceModel.create(invoiceModel);
    console.log(createdInvoice);

    return null;
  }
  async findAll(): Promise<Invoice[]> {
    const persisteInvoices = await this.invoiceModel.find();

    const invoices = MongooseInvoiceMapper.manyToDomain(persisteInvoices);

    return invoices;
  }
}
