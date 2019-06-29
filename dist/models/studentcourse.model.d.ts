import { Entity } from '@loopback/repository';
export declare class Studentcourse extends Entity {
    id: Number;
    courseid?: String;
    studentid?: String;
    [prop: string]: any;
    constructor(data?: Partial<Studentcourse>);
}
export interface StudentcourseRelations {
}
export declare type StudentcourseWithRelations = Studentcourse & StudentcourseRelations;
