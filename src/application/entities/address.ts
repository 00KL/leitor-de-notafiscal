import { randomUUID } from 'crypto';

export interface AddressProps {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  cityCode: string;
  city: string;
  state: string;
  zipCode: string; // CEP
  countryCode: string;
  country: string;
  phone: string;
}

export class Address {
  private readonly _id: string;
  private readonly props: AddressProps;

  public constructor(props: AddressProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  get street(): string {
    return this.props.street;
  }

  get number(): string {
    return this.props.number;
  }

  get complement(): string {
    return this.props.complement;
  }

  get neighborhood(): string {
    return this.props.neighborhood;
  }

  get cityCode(): string {
    return this.props.cityCode;
  }

  get city(): string {
    return this.props.city;
  }

  get state(): string {
    return this.props.state;
  }

  get zipCode(): string {
    return this.props.zipCode;
  }

  get countryCode(): string {
    return this.props.countryCode;
  }

  get country(): string {
    return this.props.country;
  }

  get phone(): string {
    return this.props.phone;
  }

  get id(): string {
    return this._id;
  }
}
