import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({timestamps:true})
export class DocumentEntity extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  path: string; 

  @Prop()
  description: string;
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);
