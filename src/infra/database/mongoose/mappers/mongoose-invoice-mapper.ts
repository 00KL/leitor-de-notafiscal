import { Invoice } from 'src/application/entities/invoice';
import { MongooseTransactionMemberMapper } from './mongoose-transaction-member-mappers';

export class MongooseInvoiceMapper {
  static toPersistence(invoice: Invoice): any {
    return {
      acessKey: invoice.acessKey,
      expireAt: invoice.expireAt,
      totalValue: invoice.totalValue,
      buyer: MongooseTransactionMemberMapper.toPersistence(invoice.buyer),
      seller: MongooseTransactionMemberMapper.toPersistence(invoice.seller),
    };
  }
  static manyToPersistence(invoices: Invoice[]): any[] {
    return invoices.map((invoice) => this.toPersistence(invoice));
  }
  static toDomain(invoice: any) {
    return new Invoice(
      {
        acessKey: invoice.acessKey,
        expireAt: invoice.expireAt,
        totalValue: invoice.totalValue,
        buyer: MongooseTransactionMemberMapper.toDomain(invoice.buyer),
        seller: MongooseTransactionMemberMapper.toDomain(invoice.seller),
      },
      invoice.id,
    );
  }
  static manyToDomain(invoices: any[]): Invoice[] {
    return invoices.map((invoice) => this.toDomain(invoice));
  }
}
