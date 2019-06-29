import { Entity } from '@loopback/repository';
export declare class Student extends Entity {
    id: String;
    name?: String;
    age?: Number;
    realm?: String;
    username?: String;
    password: String;
    email: String;
    emailverified?: Boolean;
    verificationtoken?: String;
    [prop: string]: any;
    constructor(data?: Partial<Student>);
}
export interface StudentRelations {
}
export declare type StudentWithRelations = Student & StudentRelations;
