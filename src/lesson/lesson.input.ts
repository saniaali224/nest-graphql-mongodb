import {InputType, Field, ID} from '@nestjs/graphql';
import {MinLength, IsDateString} from 'class-validator';
import { IsUUID } from 'class-validator';

@InputType()
export class CreateLessonType{
    @MinLength(5)
    @Field()
    name : string
    
    @IsDateString()
    @Field()
    startDate: string
    @IsDateString()
    @Field()
    endDate: string

    @IsUUID('4', { each: true })
    @Field(() => [ID], { defaultValue: [] })
    students: string[];
}