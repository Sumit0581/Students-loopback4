import { Entity } from '@loopback/repository';
export declare class Marks extends Entity {
    marks: Number;
    id: Number;
    studentid?: String;
    courseid?: String;
    testid?: String;
    [prop: string]: any;
    constructor(data?: Partial<Marks>);
}
export interface MarksRelations {
}
export declare type MarksWithRelations = Marks & MarksRelations;
