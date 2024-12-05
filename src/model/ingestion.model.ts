import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IngestionEntity extends Document {
  @Prop({ required: true })
  documentId: string;

  @Prop({ required: true })
  status: string; 

  @Prop()
  startedAt: Date;

  @Prop()
  completedAt: Date;
}

export const IngestionSchema = SchemaFactory.createForClass(IngestionEntity);
