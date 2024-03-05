import { Address } from '../entities/address';

export class AddressMapper {
  static httpToDomain(addressRawJson: any): Address {
    return new Address({
      street: addressRawJson['xLgr'],
      number: addressRawJson['nro'],
      neighborhood: addressRawJson['xBairro'],
      cityCode: addressRawJson['cMun'],
      city: addressRawJson['xMun'],
      state: addressRawJson['UF'],
      zipCode: addressRawJson['CEP'],
      countryCode: addressRawJson['cPais'],
      country: addressRawJson['xPais'],
      phone: addressRawJson['fone'],
    });
  }
}
