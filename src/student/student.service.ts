import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { Repository } from 'typeorm'
import { CreateStudentInput } from './createStudentInput';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) {

    }
    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOne({ id });
    };
    createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstname, lastname } = createStudentInput;
        const student = this.studentRepository.create({
            id: uuid(),
            firstname,
            lastname
        })
        return this.studentRepository.save(student);
    }

    async getStudents(): Promise<Student[]> {
        return this.studentRepository.find();

    }
    async getManyStudents(studentId: string[]): Promise<Student[]> {

        return this.studentRepository.find({
            where: {
                id:{
                    $in: studentId,
                }

            }
        })
    }

}
