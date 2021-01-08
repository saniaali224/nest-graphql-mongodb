import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonType } from './lesson.input';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private LessonRepository: Repository<Lesson>,
    ) { }

    private readonly logger = new Logger(LessonService.name);

    @Cron('45 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 45');
    }
    async getAllLessons(): Promise<Lesson[]> {

        return this.LessonRepository.find();
    };
    async getLesson(id: string): Promise<Lesson> {
        return this.LessonRepository.findOne({ id });
    };
    async createLesson(createLessonInput: CreateLessonType): Promise<Lesson> {
        const { name, startDate, endDate, students } = createLessonInput;
        const lesson = this.LessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate,
            students,
        });
        return this.LessonRepository.save(lesson);

    }
    async assignLessonToservice(lessonId: string, studentIds: string[]): Promise<Lesson> {
        const lesson = await this.LessonRepository.findOne({ id: lessonId });
        lesson.students = [...lesson.students, ...studentIds];
        return this.LessonRepository.save(lesson);
    }
}
