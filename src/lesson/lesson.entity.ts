import { Entity, PrimaryColumn, ObjectIdColumn , Column } from "typeorm";

@Entity()
export class Lesson {
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    startDate: string

    @Column()
    endDate: string
   
    @Column()
    students: string[];
}