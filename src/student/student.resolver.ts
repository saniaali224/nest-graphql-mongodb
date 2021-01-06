import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './createStudentInput';
import { StudentService } from './student.service';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentservice: StudentService
    ) { }
    @Query(returns => StudentType)
    async getStudent(
        @Args('id') id: string
    ) {
        return this.studentservice.getStudent(id);
    }
    @Query(returns => [StudentType])
    async getStudents() {
        return this.studentservice.getStudents();

    };
    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    ) {
        return this.studentservice.createStudent(createStudentInput);
    };
}