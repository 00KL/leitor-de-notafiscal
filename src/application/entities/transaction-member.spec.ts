import {
  TransactionMember,
  TransactionMemberProps,
} from './transaction-member';
import { Address } from './address';

describe('TransactionMember', () => {
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

  const transactionMemberProps: TransactionMemberProps = {
    nationalRegister: '12345678900',
    name: 'John Doe',
    fantasyName: 'JD',
    address: address,
    stateRegister: '123456789',
    crt: 'CRT123',
  };

  it('should create a transaction member with provided props', () => {
    const transactionMember = new TransactionMember(transactionMemberProps);

    expect(transactionMember.nationalRegister).toBe('12345678900');
    expect(transactionMember.name).toBe('John Doe');
    expect(transactionMember.fantasyName).toBe('JD');
    expect(transactionMember.address).toEqual(address);
    expect(transactionMember.stateRegister).toBe('123456789');
    expect(transactionMember.crt).toBe('CRT123');
  });

  it('should generate a random UUID if no id is provided', () => {
    const transactionMember = new TransactionMember(transactionMemberProps);

    expect(transactionMember.id).toBeDefined();
  });

  it('should use the provided id if provided', () => {
    const id = '123456789';
    const transactionMember = new TransactionMember(transactionMemberProps, id);

    expect(transactionMember.id).toBe(id);
  });
});
