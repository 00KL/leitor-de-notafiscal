import { randomUUID } from 'crypto';
import { TransactionMember } from './transaction-member';

export interface InvoiceProps {
  acessKey: string;
  expireAt: Date;
  totalValue: number;
  buyer: TransactionMember;
  seller: TransactionMember;
}

export class Invoice {
  private _id: string;
  private readonly props: InvoiceProps;

  public constructor(props: InvoiceProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get acessKey(): string {
    return this.props.acessKey;
  }

  get expireAt(): Date {
    return this.props.expireAt;
  }

  get totalValue(): number {
    return this.props.totalValue;
  }

  get buyer(): TransactionMember {
    return this.props.buyer;
  }

  get seller(): TransactionMember {
    return this.props.seller;
  }

  get id(): string {
    return this._id;
  }
}
