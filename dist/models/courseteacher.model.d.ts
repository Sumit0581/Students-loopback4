import { Entity } from '@loopback/repository';
export declare class Courseteacher extends Entity {
    id: Number;
    teacherid?: String;
    courseid?: String;
    [prop: string]: any;
    constructor(data?: Partial<Courseteacher>);
}
export interface CourseteacherRelations {
}
export declare type CourseteacherWithRelations = Courseteacher & CourseteacherRelations;
