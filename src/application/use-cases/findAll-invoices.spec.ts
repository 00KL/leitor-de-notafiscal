import { InMemoryInvoiceRepository } from '../../../test/repositories/in-memory-notification-repository';
import { FindAllInvoices } from './findAll-invoices';
import { SendInvoices } from './send-invoices';
import { ReadXmlFile } from '../../helpers/ReadXmlFile';
import { Invoice } from '../entities/invoice';

const invoiceXMLPathArray = [
  './assets/NFe-002-3103.xml',
  './assets/NFe-322-1120.xml',
];

describe('FindAllInvoice', () => {
  it('should return all invoices', async () => {
    const invoiceRepository = new InMemoryInvoiceRepository();
    const findAllInvoice = new FindAllInvoices(invoiceRepository);
    const sendInvoice = new SendInvoices(invoiceRepository);

    const invoiceRawJsonArray = await Promise.all(
      invoiceXMLPathArray.map((path) => ReadXmlFile(path)),
    );

    // Search for the id of the invoice in
    // each json file
    const invoicesIDs: string[] = [];
    for (const invoiceRawJson of invoiceRawJsonArray) {
      invoicesIDs.push(invoiceRawJson['nfeProc']['NFe']['infNFe']['Id']);
    }

    await sendInvoice.execute({
      invoiceRawJsonArray,
    });

    const invoices: Invoice[] = await findAllInvoice.execute();

    expect(invoices.length).toBe(2);
    expect(invoices[0].acessKey).toEqual(invoicesIDs[0]);
    expect(invoices[1].acessKey).toEqual(invoicesIDs[1]);
  });
});
