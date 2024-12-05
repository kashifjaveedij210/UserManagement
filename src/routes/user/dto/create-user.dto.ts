import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateUserDto{
    
    @IsString()
    @IsOptional()
    name:string

    @IsString()
    @IsOptional()
    userName :string;
    
    @IsEmail()
    email :string;

    @IsNumberString()
    @IsOptional()
    phone :number;
    
    password :string;

    @IsEnum(["admin", "editer", "viewer"], {
        message: 'Valid role required'
    })
    @IsOptional()
    roleType: "admin" | "editer" | "viewer";

    @IsEnum(["ACTIVE", "INACTIVE"], {
        message: 'Status is required'
    })
    @IsOptional()
    status: "ACTIVE" | "INACTIVE" ;

}