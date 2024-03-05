import { TransactionMember } from '../entities/transaction-member';
import { AddressMapper } from './address-mapper';

export class TransacionMemberMapper {
  static httpToDomain(transactionMemberRawJson: any): TransactionMember {
    // Em notas fiscais não se sabe previamente
    // se o emissor/destinatário é pessoa física ou jurídica
    // por isso é necessário verificar se o CNPJ ou CPF existe.
    const nationalRegister: string = transactionMemberRawJson['CNPJ']
      ? transactionMemberRawJson['CNPJ']
      : transactionMemberRawJson['CPF'];

    // Em notas fiscais não se sabe previamente
    // se o endereço é do emissor ou destinatário
    // por isso é necessário verificar se o endereço existe.
    const addressRawJson = transactionMemberRawJson['enderDest']
      ? transactionMemberRawJson['enderDest']
      : transactionMemberRawJson['enderEmit'];

    return new TransactionMember({
      nationalRegister: nationalRegister,
      name: transactionMemberRawJson['xNome'],
      fantasyName: transactionMemberRawJson['xFant'],
      stateRegister: transactionMemberRawJson['IE'],
      crt: transactionMemberRawJson['CRT'],
      address: AddressMapper.httpToDomain(addressRawJson),
    });
  }
}
