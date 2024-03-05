import { TransactionMember } from 'src/application/entities/transaction-member';
import { MongooseAddressMapper } from './mongoose-address-mapper';

export class MongooseTransactionMemberMapper {
  static toPersistence(transactionMember: TransactionMember): any {
    return {
      nationalRegister: transactionMember.nationalRegister,
      name: transactionMember.name,
      fantasyName: transactionMember.fantasyName,
      address: MongooseAddressMapper.toPersistence(transactionMember.address),
      stateRegister: transactionMember.stateRegister,
      crt: transactionMember.crt,
    };
  }

  static toDomain(transactionMember: any): TransactionMember {
    return new TransactionMember(
      {
        nationalRegister: transactionMember.nationalRegister,
        name: transactionMember.name,
        fantasyName: transactionMember.fantasyName,
        address: transactionMember.address,
        stateRegister: transactionMember.stateRegister,
        crt: transactionMember.crt,
      },
      transactionMember.id,
    );
  }
}
