import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    id: Number;
    name: String;
    description?: String;
    created?: String;
    modified?: String;
    [prop: string]: any;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
