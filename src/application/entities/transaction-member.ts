import { randomUUID } from 'crypto';
import { Address } from './address';

export interface TransactionMemberProps {
  nationalRegister: string; // CPF or CNPJ
  name: string;
  fantasyName?: string;
  address: Address;
  stateRegister?: string; // IE
  crt?: string; // CRT
}

export class TransactionMember {
  private readonly _id: string;
  private readonly props: TransactionMemberProps;

  public constructor(props: TransactionMemberProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get nationalRegister(): string {
    return this.props.nationalRegister;
  }

  get name(): string {
    return this.props.name;
  }

  get fantasyName(): string {
    return this.props.fantasyName;
  }

  get address(): Address {
    return this.props.address;
  }

  get stateRegister(): string {
    return this.props.stateRegister;
  }

  get crt(): string {
    return this.props.crt;
  }

  get id(): string {
    return this._id;
  }
}
