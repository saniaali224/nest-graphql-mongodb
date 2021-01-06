import {ObjectType, Field, ID} from '@nestjs/graphql';
import { type } from 'os';

@ObjectType('Student')
export class StudentType{
    @Field(type=> ID)
    id:string;

    @Field()
    firstname:string;

    @Field()
    lastname: string;

   
}