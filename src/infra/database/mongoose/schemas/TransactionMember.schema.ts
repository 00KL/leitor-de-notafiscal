import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from './Address.schema';

@Schema()
export class TransactionMember {
  @Prop({ required: true })
  nationalRegister: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  fantasyName?: string;

  @Prop({ required: true })
  @Prop({ type: AddressSchema })
  address: Address;

  @Prop()
  stateRegister?: string;

  @Prop()
  crt?: string;
}

export const TransactionMemberSchema =
  SchemaFactory.createForClass(TransactionMember);
