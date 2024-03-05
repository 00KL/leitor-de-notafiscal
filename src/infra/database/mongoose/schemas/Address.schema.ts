import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  neighborhood: string;

  @Prop({ required: true })
  cityCode: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  zipCode: string;

  @Prop({ required: true })
  countryCode: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  phone: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
