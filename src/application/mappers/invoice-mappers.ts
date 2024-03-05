import { Invoice } from '../entities/invoice';
import { TransacionMemberMapper } from './transaction-member-mappers';

export class InvoiceMapper {
  static httpToDomain(invoiceRawJson: any): Invoice {
    const buyer = TransacionMemberMapper.httpToDomain(
      invoiceRawJson['nfeProc']['NFe']['infNFe']['dest'],
    );

    const seller = TransacionMemberMapper.httpToDomain(
      invoiceRawJson['nfeProc']['NFe']['infNFe']['emit'],
    );

    return new Invoice({
      acessKey: invoiceRawJson['nfeProc']['NFe']['infNFe']['Id'],
      expireAt:
        invoiceRawJson['nfeProc']['NFe']['infNFe']['cobr']['dup']['dVenc'],
      totalValue:
        invoiceRawJson['nfeProc']['NFe']['infNFe']['pag']['detPag']['vPag'], // 'NFe/infNFe/pag/detPag/vPag
      buyer,
      seller,
    });
  }
}
