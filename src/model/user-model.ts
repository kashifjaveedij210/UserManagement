import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({ timestamps: true })
export class user {

    @Prop({ required: false })
    name: string;

    @Prop(
        {  required: false }
    )
    userName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    status: string;

    @Prop({required:false})
    roleType: string;
 
}

export const UserSchema= SchemaFactory.createForClass(user)