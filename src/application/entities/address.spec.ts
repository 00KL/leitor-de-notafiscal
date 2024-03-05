import { Address } from './address';

describe('Address', () => {
  it('should create an address with the provided properties', () => {
    const addressProps = {
      street: '123 Main St',
      number: '1A',
      complement: 'Apt 1',
      neighborhood: 'Downtown',
      cityCode: '12345',
      city: 'City',
      state: 'State',
      zipCode: '12345-678',
      countryCode: 'US',
      country: 'United States',
      phone: '123-456-7890',
    };
    const address = new Address(addressProps);

    expect(address.street).toBe(addressProps.street);
    expect(address.number).toBe(addressProps.number);
    expect(address.complement).toBe(addressProps.complement);
    expect(address.neighborhood).toBe(addressProps.neighborhood);
    expect(address.cityCode).toBe(addressProps.cityCode);
    expect(address.city).toBe(addressProps.city);
    expect(address.state).toBe(addressProps.state);
    expect(address.zipCode).toBe(addressProps.zipCode);
    expect(address.countryCode).toBe(addressProps.countryCode);
    expect(address.country).toBe(addressProps.country);
    expect(address.phone).toBe(addressProps.phone);
  });

  it('should generate a unique ID if not provided', () => {
    const addressProps = {
      street: '123 Main St',
      number: '1A',
      neighborhood: 'Downtown',
      cityCode: '12345',
      city: 'City',
      state: 'State',
      zipCode: '12345-678',
      countryCode: 'US',
      country: 'United States',
      phone: '123-456-7890',
    };

    const address = new Address(addressProps);

    expect(address.id).toBeDefined();
  });

  it('should use the provided ID if provided', () => {
    const addressProps = {
      street: '123 Main St',
      number: '1A',
      neighborhood: 'Downtown',
      cityCode: '12345',
      city: 'City',
      state: 'State',
      zipCode: '12345-678',
      countryCode: 'US',
      country: 'United States',
      phone: '123-456-7890',
    };

    const id = 'abc123';
    const address = new Address(addressProps, id);

    expect(address.id).toBe(id);
  });

  it('should create an address with no complement', () => {
    const addressProps = {
      street: '123 Main St',
      number: '1A',
      neighborhood: 'Downtown',
      cityCode: '12345',
      city: 'City',
      state: 'State',
      zipCode: '12345-678',
      countryCode: 'US',
      country: 'United States',
      phone: '123-456-7890',
    };

    const address = new Address(addressProps);

    expect(address.complement).toBeUndefined();
  });
});
