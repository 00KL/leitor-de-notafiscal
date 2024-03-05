export class InvoiceAlreadyExist extends Error {
  constructor(infNFeId: string) {
    super('Invoice with acesskey ' + infNFeId + ' already exist');
  }
}
