import { Resolver, Query, Args, Mutation, ResolveField } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonType } from "./lesson.input";
import { AssignStudentsToLesson } from "./assignStudentsToLesson";
import { Lesson } from "./lesson.entity";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService) {

    }
    @Query(returns => [LessonType])
    getAllLessons() {
        return this.lessonService.getAllLessons();
    }

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLesson(id);
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonType,
    ) {
        return this.lessonService.createLesson(createLessonInput);
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignLessonToStudentInput') assignStudentsToLesson : AssignStudentsToLesson
    ){
        const { lessonId ,studentIds}= assignStudentsToLesson;
        return this.lessonService.assignLessonToservice(lessonId,studentIds);
    }
    @ResolveField()
    async students(@Parent() lesson:Lesson){
        
    }

}