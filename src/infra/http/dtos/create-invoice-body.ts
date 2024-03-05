import { IsNotEmpty } from 'class-validator';

export class CreateInvoiceBody {
  @IsNotEmpty()
  invoiceRawJson: any;
}
