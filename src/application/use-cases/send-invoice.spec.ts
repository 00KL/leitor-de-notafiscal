import { InMemoryInvoiceRepository } from './../../../test/repositories/in-memory-notification-repository';
import { SendInvoices } from './send-invoices';
import { ReadXmlFile } from '../../helpers/ReadXmlFile';

describe('SendInvoice', () => {
  it('should create and save an invoice', async () => {
    const invoiceRepository = new InMemoryInvoiceRepository();
    const sendInvoice = new SendInvoices(invoiceRepository);

    // read file and parse to json
    const invoiceRawJson = await ReadXmlFile('./assets/NFe-002-3103.xml');

    const response = await sendInvoice.execute({
      invoiceRawJsonArray: [invoiceRawJson],
    });

    console.log(response.invoiceArray[0].id);

    expect(response.invoiceArray.length).toBe(1);
    expect(response.invoiceArray[0].id).toBeDefined();
  });
});
