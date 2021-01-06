import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
    @MinLength(5)
    @Field()
    firstname: string

    @MinLength(2)
    @Field()
    lastname: string

}
