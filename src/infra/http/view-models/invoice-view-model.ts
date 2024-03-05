import { Invoice } from '../../../application/entities/invoice';

export class InvoiceViewModel {
  static toHttp(invoice: Invoice): any {
    return {
      acessKey: invoice.acessKey,
      expireAt: invoice.expireAt,
      totalValue: invoice.totalValue,
      buyer: {
        name: invoice.buyer.name,
        cpf: invoice.buyer.nationalRegister,
      },
      seller: {
        name: invoice.seller.name,
        cnpj: invoice.seller.nationalRegister,
      },
    };
  }

  static toManyHttp(invoices: Invoice[]): any {
    return invoices.map((invoice) => this.toHttp(invoice));
  }
}
