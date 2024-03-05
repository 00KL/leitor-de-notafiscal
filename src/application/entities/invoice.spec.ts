import { Invoice, InvoiceProps } from './invoice';
import { makeTransactionMember } from '../../../test/factory/transaction-member-factory';

describe('Invoice', () => {
  const invoiceProps: InvoiceProps = {
    acessKey: 'ABC123',
    expireAt: new Date('2022-12-31'),
    totalValue: 100.0,
    buyer: makeTransactionMember({ name: 'buyer' }),
    seller: makeTransactionMember({ name: 'seller' }),
  };

  it('should create an instance of Invoice', () => {
    const invoice = new Invoice(invoiceProps);

    expect(invoice).toBeInstanceOf(Invoice);
  });

  it('should get the correct values', () => {
    const invoice = new Invoice(invoiceProps);

    expect(invoice.acessKey).toBe(invoiceProps.acessKey);
    expect(invoice.expireAt).toEqual(invoiceProps.expireAt);
    expect(invoice.totalValue).toBe(invoiceProps.totalValue);
  });
});
