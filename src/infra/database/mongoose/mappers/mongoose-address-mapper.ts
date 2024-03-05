import { Address } from '../../../../application/entities/address';
import { Address as AddressModel } from '../schemas/Address.schema';

export class MongooseAddressMapper {
  static toPersistence(address: AddressModel): any {
    return {
      street: address.street,
      number: address.number,
      neighborhood: address.neighborhood,
      cityCode: address.cityCode,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      countryCode: address.countryCode,
      country: address.country,
      phone: address.phone,
    };
  }

  static toDomain(mongooseAddress: any): Address {
    if (!mongooseAddress) {
      return null;
    }
    return new Address(
      {
        street: mongooseAddress.street,
        number: mongooseAddress.number,
        neighborhood: mongooseAddress.neighborhood,
        cityCode: mongooseAddress.cityCode,
        city: mongooseAddress.city,
        state: mongooseAddress.state,
        zipCode: mongooseAddress.zipCode,
        countryCode: mongooseAddress.countryCode,
        country: mongooseAddress.country,
        phone: mongooseAddress.phone,
      },
      mongooseAddress.id,
    );
  }
}
