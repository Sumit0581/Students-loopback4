import { Entity } from '@loopback/repository';
export declare class Teacher extends Entity {
    id: String;
    name?: String;
    experience?: Number;
    realm?: String;
    username?: String;
    password: String;
    email: String;
    emailverified?: Boolean;
    verificationtoken?: String;
    [prop: string]: any;
    constructor(data?: Partial<Teacher>);
}
export interface TeacherRelations {
}
export declare type TeacherWithRelations = Teacher & TeacherRelations;
