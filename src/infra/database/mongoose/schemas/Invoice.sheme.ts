import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  TransactionMember,
  TransactionMemberSchema,
} from './TransactionMember.schema';

@Schema()
export class Invoice {
  @Prop({ required: true, unique: true })
  acessKey: string;

  @Prop({ required: true })
  expireAt: Date;

  @Prop({ required: true })
  totalValue: number;

  @Prop({ required: true })
  @Prop({ type: TransactionMemberSchema })
  buyer: TransactionMember;

  @Prop({ required: true })
  @Prop({ type: TransactionMemberSchema })
  seller: TransactionMember;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
