import {ObjectType, Field, ID} from '@nestjs/graphql';
import { type } from 'os';
import { StudentType } from 'src/student/student.type';

@ObjectType()
export class LessonType{
    @Field(type=> ID)
    id:string;

    @Field()
    name:string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [StudentType])
    student: string[]
}