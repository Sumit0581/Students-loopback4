import { Entity } from '@loopback/repository';
export declare class Test extends Entity {
    name: String;
    [prop: string]: any;
    constructor(data?: Partial<Test>);
}
export interface TestRelations {
}
export declare type TestWithRelations = Test & TestRelations;
