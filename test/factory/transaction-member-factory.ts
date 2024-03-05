import { TransactionMember } from '../../src/application/entities/transaction-member';
import { Address } from '../../src/application/entities/address';

type Override = Partial<TransactionMember>;

export function makeTransactionMember(
  override: Override = {},
): TransactionMember {
  const address = new Address({
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
  });

  const transactionMemberProps = {
    nationalRegister: '12345678900',
    name: 'John Doe',
    fantasyName: 'JD',
    address: address,
    stateRegister: '123456789',
    crt: 'CRT123',
    ...override,
  };

  return new TransactionMember(transactionMemberProps);
}
