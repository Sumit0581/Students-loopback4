import { Entity } from '@loopback/repository';
export declare class Studenttest extends Entity {
    id: Number;
    studentid?: String;
    testid?: String;
    [prop: string]: any;
    constructor(data?: Partial<Studenttest>);
}
export interface StudenttestRelations {
}
export declare type StudenttestWithRelations = Studenttest & StudenttestRelations;
